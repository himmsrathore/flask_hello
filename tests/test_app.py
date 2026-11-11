import pytest
from app import app


@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


def test_health(client):
    rv = client.get('/api/health')
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert json_data['status'] == 'ok'


def test_shell_disabled_without_passcode(client, monkeypatch):
    monkeypatch.delenv('SHELL_PASSCODE', raising=False)
    rv = client.post('/api/shell/projects', json={'passcode': 'anything'})
    assert rv.status_code == 503


def test_shell_rejects_wrong_passcode(client, monkeypatch):
    monkeypatch.setenv('SHELL_PASSCODE', 'secret')
    rv = client.post('/api/shell/projects', json={'passcode': 'wrong'})
    assert rv.status_code == 401
    assert 'projects' not in rv.get_json()


def test_shell_returns_projects_with_passcode(client, monkeypatch):
    monkeypatch.setenv('SHELL_PASSCODE', 'secret')
    monkeypatch.setenv('PRIVATE_PROJECTS', '[{"title": "X", "link": "https://x.test"}]')
    rv = client.post('/api/shell/projects', json={'passcode': 'secret'})
    assert rv.status_code == 200
    assert rv.get_json()['projects'] == [{'title': 'X', 'link': 'https://x.test'}]
