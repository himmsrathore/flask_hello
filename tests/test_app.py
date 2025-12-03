import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_sum_api(client):
    rv = client.post('/api/sum', json={'num1': 10, 'num2': 20})
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert json_data['sum'] == 30
    assert json_data['num1'] == 10
    assert json_data['num2'] == 20

def test_sum_api_invalid(client):
    rv = client.post('/api/sum', json={'num1': 'a', 'num2': 20})
    assert rv.status_code == 400
    assert 'error' in rv.get_json()
