"""This file just runs a local dev server.

You could also run the following command from your terminal:
`uvicorn api.api:app --host 0.0.0.0 --port 8000 --reload`
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("api.api:app", host="0.0.0.0", port=8000, reload=True)
