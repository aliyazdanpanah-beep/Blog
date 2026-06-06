from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine
from router import blog, auth, user
import models


app = FastAPI()

models.Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)


app.include_router(blog.router)
app.include_router(auth.router)
app.include_router(user.router)