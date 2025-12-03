import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_form(client):
    rv = client.get('/')
    assert rv.status_code == 200
    assert b'<form method="post">' in rv.data
    assert b'name="num1"' in rv.data
    assert b'name="num2"' in rv.data

def test_post_sum(client):
    rv = client.post('/', data={'num1': '10', 'num2': '20'})
    assert rv.status_code == 200
    assert b"Sum: 30" in rv.data
