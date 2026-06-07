from fastapi import APIRouter, Depends, HTTPException, Path, Query
from models import Articels, Users
from database import SessionLocal
from sqlalchemy.orm import Session
from typing import Annotated
from starlette import status
from pydantic import BaseModel, Field
from .auth import get_current_user

router = APIRouter(
     prefix='/admin',
     tags=['admin']
)


def get_db():
     db = SessionLocal()
     try:
          yield db
     finally:
          db.close()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]


@router.get('/all/users', status_code=status.HTTP_200_OK)
async def read_all_users(user: user_dependency, db: db_dependency):
     if user is None or user.get('user_role') != 'admin':
          raise HTTPException(status_code=401, detail='Aunautherzied')
     return db.query(Users).all()


@router.get('/all/articel/{articels_id}', status_code=status.HTTP_200_OK)
async def find_all_articels_by_id(user: user_dependency, db: db_dependency, articels_id: int = Path(gt=0)):
     if user is None or user.get('user_role') != 'admin':
          raise HTTPException(status_code=401, detail='Aunautherized')
     articels_model = db.query(Articels).filter(Articels.id == articels_id).first()

     return articels_model


@router.delete('/all/articel/delete/{articels_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_all_articel_by_id(user: user_dependency, db: db_dependency, articels_id: int = Path(gt=0)):
     if user is None or user.get('user_role') != 'admin':
          raise HTTPException(status_code=401, detail='Aunautherizrd')
     
     articels_model = db.query(Articels).filter(Articels.id == articels_id).first()
     
     db.delete(articels_model)
     db.commit()
