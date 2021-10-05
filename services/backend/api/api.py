from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .models import Condition, Forecast
from typing import List, Optional
from datetime import datetime, timedelta
import random

app = FastAPI()

origins = ["http://localhost", "http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def get_root():
    return {"data": "I am a WeatherApp"}


@app.get("/forecast/{location}", response_model=List[Forecast])
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
    return forecasts
