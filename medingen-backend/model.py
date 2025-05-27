import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    generic_name = db.Column(db.String(255))
    manufacturer = db.Column(db.String(255))
    price = db.Column(db.Float)
    discounted_price = db.Column(db.Float)
    image_url = db.Column(db.String(512))

    # Relationships
    salts = db.relationship('Salt', backref='product', lazy=True)
    reviews = db.relationship('Review', backref='product', lazy=True)
    descriptions = db.relationship('Description', backref='product', lazy=True)


class Salt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)

    # Foreign Key
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default= datetime.datetime.utcnow)

    # Foreign Key
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)


class Description(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    content = db.Column(db.Text)

    # Foreign Key
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)