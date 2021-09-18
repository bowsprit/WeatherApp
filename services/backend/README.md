# Overview

## Initial setup

Run `pip install -r requirements-dev.txt`

## Running dev server

`python server.py`

or

`uvicorn api.api:app --host 0.0.0.0 --port 8000 --reload`

Navigate to `localhost:8000/docs` for documentation

## Running tests

`pytest tests`

## Formatting

`black api tests`