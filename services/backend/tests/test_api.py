from fastapi.testclient import TestClient
from api.api import app

test_app = TestClient(app)


def test_root():
    response = test_app.get("/")
    assert response.status_code == 200


def test_forecast():
    test_location = "San Francisco, CA"
    days = 10
    response = test_app.get(f"/forecast/{test_location}?days={days}")
    assert (
        response.status_code == 200
    ), f"Expected response 200, got {response.status_code}: {response.reason}."
    data = response.json()
    assert test_location in data
    forecast = data[test_location]
    assert len(forecast) == days
