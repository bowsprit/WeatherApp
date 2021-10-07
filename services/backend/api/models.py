from pydantic import BaseModel
from typing import Optional
import hashlib


class Location(BaseModel):
    lat: float
    lon: float
    query_string: Optional[str] = None

    @property
    def hashable_name(self) -> str:
        return f"{self.lat}+{self.lon}"

    @property
    def hash(self) -> str:
        return hashlib.md5(self.hashable_name).hexdigest()
