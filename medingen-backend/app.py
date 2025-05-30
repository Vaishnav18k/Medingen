from flask import Flask, jsonify, request
import jwt
import datetime
from functools import wraps
from config import Config
from model import db, Product, Salt, Review, Description
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = Config.SECRET_KEY
CORS(app, supports_credentials=True)

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
    data = request.get_json()
    print("Received login data:", data)  # Log what's coming in

    if not data or data.get('username') != 'admin' or data.get('password') != 'password':
        print("⚠️ Invalid credentials")
        return jsonify({'message': 'Invalid credentials'}), 401

    token = jwt.encode({
        'user': data['username'],
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }, app.config['SECRET_KEY'], algorithm='HS256')

    print("✅ Login successful, returning token")  # Confirm success
    return jsonify({'token': token})

@app.route('/products', methods=['GET'])
@token_required
def get_products():
    products = Product.query.all()
    return jsonify([{
        'id': p.id,
        'name': p.name,
        'description': p.description,
        'uses': p.uses.split(',') if p.uses else [],
        'howItWorks': p.howItWorks.split('|') if p.howItWorks else [],
        'sideEffects': p.sideEffects.split(',') if p.sideEffects else [],
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
        'description': s.description,
        'products': [{
            'id': p.id,
            'name': p.name
        } for p in s.products]
    } for s in salts])

@app.route('/reviews', methods=['GET'])
@token_required
def get_reviews():
    reviews = Review.query.all()
    return jsonify([{
        'id': r.id,
        'product_id': r.product_id,
        'rating': r.rating,
        'comment': r.comment,
        'created_at': r.created_at.isoformat() if r.created_at else None,
        'product_name': r.product.name if r.product else None
    } for r in reviews])

@app.route('/descriptions', methods=['GET'])
@token_required
def get_descriptions():
    descriptions = Description.query.all()
    return jsonify([{
        'id': d.id,
        'product_id': d.product_id,
        'title': d.title,
        'content': d.content,
        'product_name': d.product.name if d.product else None
    } for d in descriptions])

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def server_error(error):
    return jsonify({'error': 'Server error'}), 500

def create_tables_and_seed():
    db.create_all()

    if not Product.query.first():
        # Create salts
        salt1 = Salt(name="Paracetamol", description="Pain reliever and fever reducer.")
        salt2 = Salt(name="Acetaminophen", description="Alternative name for Paracetamol.")
        salt3 = Salt(name="Ibuprofen", description="Nonsteroidal anti-inflammatory drug.")
        salt4 = Salt(name="Ibuprofen Lysine", description="Building block for making proteins in the body")
        
        db.session.add_all([salt1, salt2, salt3, salt4])
        db.session.commit()

        # Create products
        paracetamol = Product(
            name="UDILIV 300MG TABLET 15'S",
            description="Used to treat various conditions such as pain and fever.",
            uses="Helps in dissolving gallstones.,Is used in the treatment of primary biliary cholangitis (PBC).,Aids in managing other cholestatic liver disorders.,Can be used to prevent gallstone formation.,Assists in improving liver function.",
            howItWorks="Dosage for children: The dosage of UDILIV 300MG TABLET 15'S for children depends on their body weight and the specific liver disorder being treated. It is typically prescribed by a pediatrician or gastroenterologist who will determine the appropriate dosage.|Dosage for Adults: The recommended dosage of UDILIV 300MG TABLET 15'S for adults varies depending on the indication. For gallstone dissolution, the usual dose is 8-10 mg/kg body weight per day, divided into two to three doses. In the treatment of primary biliary cholangitis (PBC), the typical dose ranges from 13-15 mg/kg body weight per day, also divided into multiple doses. However, dosages may differ based on individual patient factors, and it is essential to follow the specific instructions provided by a healthcare professional.|Headache",
            sideEffects="Nausea,Headache,Drowsiness,Rashes,Stomach Discomfort",
            generic_name="Paracetamol",
            manufacturer="Cipla Ltd",
            price=25.0,
            discounted_price=20.0,
            image_url="https://www.netmeds.com/images/product-v1/600x600/412620/udiliv_300mg_tablet_15s_3_0.jpg"
        )
        ibuprofen = Product(
            name="Sumo 400 MG",
            description="NSAID + Paracetamol combo for faster pain relief.",
            uses="Joint Pain,Back Pain,Post-operative pain",
            howItWorks="Combines two pain-relieving ingredients|Effective in moderate to severe pain|Enhanced pain relief",
            sideEffects="Heartburn,Diarrhea,Dizziness",
            generic_name="Ibuprofen + Paracetamol",
            manufacturer="Dr. Reddy’s Laboratories",
            price=22.0,
            discounted_price=20.0,
            image_url="https://via.placeholder.com/300x300?text=SUMO"
        )

        # Add products to session
        db.session.add_all([paracetamol, ibuprofen])
        db.session.commit()

        # Assign salts to products
        paracetamol.salts = [salt1, salt2]
        ibuprofen.salts = [salt3, salt4]

        # Create review and description
        review1 = Review(rating=5, comment="Best medicine for fever!", product_id=paracetamol.id)
        desc1 = Description(title="About", content="Paracetamol is a common painkiller used to treat mild to moderate pain and reduce fever.", product_id=paracetamol.id)

        db.session.add_all([review1, desc1])
        db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        create_tables_and_seed()
        app.run(debug=True)

import logging
logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)