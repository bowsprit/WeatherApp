from fastapi import FastAPI, HTTPException
from .models import Location
from . import geocoder
import logging

logger = logging.getLogger(__file__)

app = FastAPI()


@app.get("/")
async def get_root():
    return {"data": "I am a WeatherApp"}


@app.get("/location/{location_query}", response_model=Location)
def get_geocoded_location(location_query: str):
    try:
        return geocoder.get_location_from_query(location_query)
    except geocoder.GeocoderError as e:
        raise HTTPException(status_code=500, detail=str(e))
