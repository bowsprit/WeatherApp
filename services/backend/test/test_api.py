from fastapi.testclient import TestClient
from api.api import app

test_app = TestClient(app)


def test_root():
    response = test_app.get("/")
    assert response.status_code == 200
