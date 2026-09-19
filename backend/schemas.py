from pydantic import BaseModel
from typing import List, Optional

class PredictionRequest(BaseModel):
    animal_id: str
    
class PredictionResponse(BaseModel):
    animal_id: str
    mastitis_probability_7_14_days: float
    risk_level: str
    explanation: Optional[dict] = None
