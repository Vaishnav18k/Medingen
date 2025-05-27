# app.py

from flask import Flask, jsonify, request
import jwt
import datetime
from functools import wraps
from config import Config
from model import db, Product, Salt, Review, Description


app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = Config.SECRET_KEY

# Initialize DB
db.init_app(app)

# Dummy Login Auth Decorator
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('x-access-token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.secret_key, algorithms=['HS256'])
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return decorated


@app.route('/login', methods=['POST'])
def login():
    auth = request.get_json()
    if auth.get('username') == 'admin' and auth.get('password') == 'password':
        token = jwt.encode({
            'user': auth['username'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }, app.secret_key)
        return jsonify({'token': token})
    return jsonify({'error': 'Invalid credentials'}), 401


@app.route('/products', methods=['GET'])
@token_required
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'description': p.description,
        'generic_name': p.generic_name,
        'manufacturer': p.manufacturer,
        'price': p.price,
        'discounted_price': p.discounted_price,
        'image_url': p.image_url,
        'salts': [{'name': s.name, 'description': s.description} for s in p.salts],
        'reviews': [{
            'rating': r.rating,
            'comment': r.comment,
            'created_at': r.created_at.isoformat()
        } for r in p.reviews],
        'descriptions': [{
            'title': d.title,
            'content': d.content
        } for d in p.descriptions]
    } for p in products])


@app.route('/salts', methods=['GET'])
@token_required
def get_salts():
    salts = Salt.query.all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'description': s.description
    } for s in salts])


# Initialize DB on startup
# @app.before_first_request
# def create_tables():
#     db.create_all()


# @app.before_first_request
def create_tables_and_seed():
    db.create_all()

    if not Product.query.first():
        
        paracetamol = Product(
            name="UDILIV 300MG TABLET 15'S",
            description="Used to treat various conditions such as pain and fever.",
            generic_name="Paracetamol",
            manufacturer="Cipla Ltd",
            price=25.0,
            discounted_price=20.0,
            image_url=" https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg"
        )

        salt1 = Salt(name="Paracetamol", description="Pain reliever and fever reducer.")
        salt2 = Salt(name="Acetaminophen", description="Alternative name for Paracetamol.")

        review1 = Review(rating=5, comment="Best medicine for fever!")
        desc1 = Description(title="About", content="Paracetamol is a common painkiller used to treat mild to moderate pain and reduce fever.")

        paracetamol.salts.append(salt1)
        paracetamol.salts.append(salt2)
        paracetamol.reviews.append(review1)
        paracetamol.descriptions.append(desc1)

        db.session.add(paracetamol)
        db.session.commit()
        
if __name__ == '__main__':
    with app.app_context():
        create_tables_and_seed()
    app.run(debug=True)
# print(app.config['SQLALCHEMY_DATABASE_URI'])
# app.config.from_object(Config)