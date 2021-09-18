from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def get_root():
    return {"data": "I am a WeatherApp"}
