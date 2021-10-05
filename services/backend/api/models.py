from pydantic import BaseModel
from datetime import date
from enum import Enum


class Condition(str, Enum):
    sunny = "sunny"
    cloudy = "cloudy"
    partial_cloudy = "partial-cloudy"
    partial_sunny = "partial-sunny"
    windy = "windy"
    lightning = "lightning"
    snow = "snow"
    rain = "rain"
    light_right = "light-rain"
    heavy_rain = "heavy-rain"


class Forecast(BaseModel):
    date: date
    condition: Condition
    temp: float

    class Config:
        use_enum_values = True
