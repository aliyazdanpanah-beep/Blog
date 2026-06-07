from fastapi import APIRouter, Depends, HTTPException, Path, Query
from models import Articels, Users
from database import SessionLocal
from sqlalchemy.orm import Session
from typing import Annotated
from starlette import status
from pydantic import BaseModel, Field
from .auth import get_current_user
from passlib.context import CryptContext


router = APIRouter(
     prefix='/user',
     tags=['user']
)


def get_db():
     db = SessionLocal()
     try:
          yield db
     finally:
          db.close()


class user_verfic(BaseModel):
     password: str
     new_password: str = Field(min_length=6)
     username: str


class CreateArticelBody(BaseModel):
     title: str
     description: str
     img: str
     


db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[dict, Depends(get_current_user)]
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


@router.get("/", status_code=status.HTTP_200_OK)
async def get_user(user: user_dependency, db: db_dependency):
     if user is None:
          raise HTTPException(status_code=404, detail='Authentication Faield')
     return db.query(Users).filter(Users.id == user.get('id')).first()


@router.get('/articels/', status_code=status.HTTP_200_OK)
async def read_all_post_user(user: user_dependency, db: db_dependency):
      if user is None:
          raise HTTPException(status_code=401, detail='Aunautherized')
      return db.query(Articels).filter(Articels.owner_id == user.get('id')).all()



@router.post('/post/articel/', status_code=status.HTTP_201_CREATED)
async def create_articel(user: user_dependency, db: db_dependency, articels_reauest: CreateArticelBody):
     if user is None:
          raise HTTPException(status_code=401, detail='Aunautherized')
     articel_model = Articels(**articels_reauest.dict(), owner_id = user.get('id'))
     
     db.add(articel_model)
     db.commit()


@router.put('/update/articels/{articels_id}', status_code=status.HTTP_200_OK)
async def update_articel_by_id(user: user_dependency, db: db_dependency, 
                              articels_request: CreateArticelBody, articels_id: int = Path(gt=0)):
     
     if user is None:
          raise HTTPException(status_code=401, detail='Aunautherized')
     articels_model = db.query(Articels).filter(Articels.id == articels_id).filter(Articels.owner_id == user.get('id')).first()

     if articels_model is None:
          raise HTTPException(status_code=404, detail='Articel not found')
     articels_model.title = articels_request.title
     articels_model.description = articels_request.description
     articels_model.img = articels_request.img

     db.add(articels_model)
     db.commit()


@router.put('/change/info', status_code=status.HTTP_204_NO_CONTENT)
async def change_password(user: user_dependency, db: db_dependency, user_verfication: user_verfic):
     if user is None:
          raise HTTPException(status_code=404, detail='Authentication Failed')
     user_model = db.query(Users).filter(Users.id == user.get('id')).first()

     if not bcrypt_context.verify(user_verfication.password, user_model.hashed_password):
          raise HTTPException(status_code=401, detail="Error on password change")
     user_model.hashed_password = bcrypt_context.hash(user_verfication.new_password)
     user_model.username = user_verfication.username
     db.add(user_model)
     db.commit()


@router.delete('/articel/delete/{articels_id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_articel_id(user: user_dependency, db: db_dependency, articels_id: int = Path(gt=0)):
     if user is None:
          raise HTTPException(status_code=401, detail='Aunautherized')
     articels_model = db.query(Articels).filter(Articels.id == articels_id).filter(Articels.owner_id == user.get('id')).first()

     if articels_model is None:
          raise HTTPException(status_code=404, detail='Articel not found')
     db.delete(articels_model)
     db.commit()