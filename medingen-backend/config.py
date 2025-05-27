import os
# from flask_sqlalchemy import SQlAlchemy  
from flask_sqlalchemy import SQLAlchemy
class Config:
    SECRET_KEY ='7dc2ff8154a17187405bbdcd269a8a87'  
    SQLALCHEMY_DATABASE_URI = 'mysql://root:root123@localhost:3306/medingen_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False