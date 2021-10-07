from typing import List
from requests.api import request
from .models import Location
import requests
import os
from functools import lru_cache
import logging

logger = logging.getLogger(__file__)


API_KEY = os.environ.get("GEOCODER_API_KEY")
if not API_KEY:
    logger.warn("Geocoder API key env var not set.")


class GeocoderError(Exception):
    pass


def parse_location_string(location_string: str) -> Location:
    """Parses a string formatted like `{lat}+{lon}` into a Location object

    e.g. `34.05513+-118.25703` -> Location(lat: 4.05513, lon: -118.25703)

    Parameters
    ----------
    location_string: str
        A string formatted as specified above

    Returns
    -------
    Location

    Raises
    ------
    ValueError
        If entity can't be parsed
    """
    # This would arguable be simpler with regex but I don't care to bother with that right now.
    if "+" in location_string:
        split_string = location_string.split("+")
        if len(split_string) == 2:
            lat, lon = split_string
            return Location(lat=float(lat), lon=float(lon))

    raise ValueError(f"Unable to parse {location_string}. Expected format 'lat+lon'")


@lru_cache(maxsize=256)
def get_location_from_query(query_string: str, limit: int = 1) -> List[Location]:
    """Geocodes a raw query string into a canonical lat/lon location.

    This funtional calls the `positionstack` geocoder API to transform user location queries
    into canonical lat/lon locations.

    Parameters
    ----------
    query_string: str
        A raw string, entered by a user, that the geocoder will attempt to locate.
    limit: int (default: 1)
        The max number of records to return.

    Returns
    -------
    List[Location]

    Raises
    ------
    GeocoderError
        On non-200 external API return
    TypeError
        If response schema cannot be parsed
    """
    URI = "http://api.positionstack.com/v1/forward?access_key={api_key}&query={query}&limit={limit}"
    request_url = URI.format(api_key=API_KEY, query=query_string, limit=limit)
    response = requests.get(request_url)
    if not response.ok:
        # TODO: More granular error types based on the error reason
        raise GeocoderError(
            f"Geocoder returned a status code {response.status_code}: {response.reason}"
        )
    try:
        locations: List[Location] = []
        location_data = response.json()["data"]
        for data in location_data:
            location = Location(
                lat=data["latitude"],
                lon=data["longitude"],
                query_string=query_string,
            )
            locations.append(location)
    except TypeError as e:
        logger.error("Attempt to unpack response failed: {}".format(response.json()))
        # TODO: Should this return a GeocoderError as well?
        raise e
    return locations
