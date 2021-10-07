from api.geocoder import GeocoderError, get_location_from_query, parse_location_string
from api.models import Location
import pytest


def test_get_location_from_query():
    test_query_string = "San Francisco, CA"
    test_limit = 4
    expected_result = Location(
        lat=37.778008,
        lon=-122.431272,
        query_string="San Francisco, CA",
    )

    responses = get_location_from_query(test_query_string, test_limit)
    assert (
        0 < len(responses) <= test_limit
    ), f"Expected {test_limit} or fewer results, got {len(responses)}."
    top_result = responses[0]
    assert isinstance(
        top_result, Location
    ), f"Expected `Location` type, got {type(top_result)}."
    assert (
        top_result == expected_result
    ), f"Expected {expected_result}, got {top_result}."


def test_parse_location_string():
    valid_test_string = "34.05513+-118.25703"
    expected_location = Location(lat=34.05513, lon=-118.25703)

    parsed_location = parse_location_string(valid_test_string)
    assert (
        parsed_location == expected_location
    ), f"Expected {expected_location}, got {parsed_location}."

    invalid_test_string = "foo&bar"
    with pytest.raises(ValueError):
        parse_location_string(invalid_test_string)
