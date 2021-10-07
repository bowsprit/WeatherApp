from fastapi.testclient import TestClient
from api.api import app
from api.models import Location

test_app = TestClient(app)


def test_root():
    response = test_app.get("/")
    assert response.status_code == 200


def test_location():
    test_query = "Los Angeles, CA"
    expected_json_response = Location(
        lat=34.05513, lon=-118.25703, query_string="Los Angeles, CA"
    ).dict()
    response = test_app.get(f"/location/{test_query}")
    assert (
        response.json() == expected_json_response
    ), f"Expected {expected_json_response}, got {response}."
