from fastapi import FastAPI
from .models import Condition, Forecast
from typing import Dict, List, Optional
from datetime import datetime, timedelta
import random

app = FastAPI()


@app.get("/")
async def get_root():
    return {"data": "I am a WeatherApp"}


@app.get("/forecast/{location}", response_model=Dict[str, List[Forecast]])
async def get_forecast_by_location(
    location: str, start_date: Optional[datetime] = None, days: int = 5
):
    if not start_date:
        start_date = datetime.now().date()
    forecasts = []
    for delta in range(days):
        forecast_date = start_date + timedelta(days=delta)
        # Just get a random condition and temp
        condition = random.choice(list(Condition))
        temp = round(random.uniform(23, 105), 1)
        forecast = Forecast(date=forecast_date, condition=condition, temp=temp)
        forecasts.append(forecast)
    return {location: forecasts}
