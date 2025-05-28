import requests

# API Base URL
BASE_URL = "http://127.0.0.1:5000"

# 1. Login to get token
login_data = {"username": "admin", "password": "password"}
try:
    response = requests.post(f"{BASE_URL}/login", json=login_data)
    response.raise_for_status()  # Raise an error for bad status codes (4xx/5xx)
    token = response.json()["token"]
    print("Login successful! Token:", token)
except Exception as e:
    print("Login failed:", e)
    exit()

# 2. Access /products with the token
headers = {"x-access-token": token}
try:
    products = requests.get(f"{BASE_URL}/products", headers=headers)
    products.raise_for_status()
    print("Products:", products.json())
except Exception as e:
    print("Failed to fetch products:", e)