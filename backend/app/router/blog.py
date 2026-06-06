from fastapi import APIRouter, Depends, HTTPException, Path, Query
from models import Articels, Users
from database import SessionLocal
from sqlalchemy.orm import Session
from typing import Annotated
from starlette import status
from pydantic import BaseModel, Field


router = APIRouter()


def get_db():
     db = SessionLocal()
     try:
          yield db
     finally:
          db.close()

db_dependency = Annotated[Session, Depends(get_db)]
# user_dependency = Annotated[dict, Depends(get_current_user)]

@router.get('/blogs/', status_code=status.HTTP_200_OK)
async def get_all_blogs(db: db_dependency):
   return db.query(Articels).all()