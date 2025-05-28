# import secrets

# print(secrets.token_hex(16))
# print('mysql://root:root123@localhost:3306/medingen_db')

import requests

# 1. Login to get token
login_data = {"username": "admin", "password": "password"}
response = requests.post("http://127.0.0.1:5000/login", json=login_data)
token = response.json()["token"]

# 2. Access /products with token
headers = {"x-access-token": token}
products = requests.get("http://127.0.0.1:5000/products", headers=headers)
print(products.json())