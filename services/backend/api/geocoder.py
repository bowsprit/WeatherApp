from requests.api import request
from .models import Location
import requests
import os
from functools import lru_cache
import logging

logger = logging.getLogger(__file__)


API_KEY = os.environ.get("GEOCODER_API_KEY")


class GeocoderError(Exception):
    pass


@lru_cache(maxsize=256)
def get_location_from_query(query_string: str, limit: int = 1) -> Location:
    URI = "http://api.positionstack.com/v1/forward?access_key={api_key}&query={query}&limit={limit}"
    request_url = URI.format(api_key=API_KEY, query=query_string, limit=limit)
    response = requests.get(request_url)
    if not response.ok:
        raise GeocoderError(
            f"Geocoder returned a status code {response.status_code}: {response.reason}"
        )
    location_data = response.json()["data"][0]
    location = Location(
        lat=location_data["latitude"],
        lon=location_data["longitude"],
        query_string=query_string,
    )
    return location
