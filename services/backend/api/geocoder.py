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
    """
    URI = "http://api.positionstack.com/v1/forward?access_key={api_key}&query={query}&limit={limit}"
    request_url = URI.format(api_key=API_KEY, query=query_string, limit=limit)
    response = requests.get(request_url)
    if not response.ok:
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
        raise e
    return locations
