import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Association Table for Many-to-Many
product_salts = db.Table('product_salts',
    db.Column('product_id', db.Integer, db.ForeignKey('product.id'), primary_key=True),
    db.Column('salt_id', db.Integer, db.ForeignKey('salt.id'), primary_key=True)
)

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)
    uses = db.Column(db.Text)  # CSV string
    howItWorks = db.Column(db.Text)  # Pipe-separated
    sideEffects = db.Column(db.Text)  # CSV string
    generic_name = db.Column(db.String(255))
    manufacturer = db.Column(db.String(255))
    price = db.Column(db.Float)
    discounted_price = db.Column(db.Float)
    image_url = db.Column(db.String(512))

    # Relationships
    salts = db.relationship('Salt', secondary=product_salts, backref='products', lazy=True)
    reviews = db.relationship('Review', backref='product', lazy=True)
    descriptions = db.relationship('Description', backref='product', lazy=True)

class Salt(db.Model):
    __tablename__ = 'salt'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text)

class Review(db.Model):
    __tablename__ = 'review'
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

class Description(db.Model):
    __tablename__ = 'description'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    content = db.Column(db.Text)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)