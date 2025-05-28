import requests

# API Configuration
BASE_URL = "http://127.0.0.1:5000"
LOGIN_DATA = {"username": "admin", "password": "password"}

def get_auth_token():
    """Get JWT token from /login endpoint"""
    try:
        response = requests.post(f"{BASE_URL}/login", json=LOGIN_DATA)
        response.raise_for_status()
        return response.json()["token"]
    except Exception as e:
        print(f"⚠️ Login failed: {e}")
        exit()

def fetch_protected_data(endpoint, token):
    """Generic function to fetch data from protected endpoints"""
    try:
        response = requests.get(
            f"{BASE_URL}/{endpoint}",
            headers={"x-access-token": token}
        )
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"⚠️ Failed to fetch {endpoint}: {e}")
        return None

if __name__ == "__main__":
    # 1. Authenticate
    token = get_auth_token()
    print("🔑 Token:", token)

    # 2. Test /products
    products = fetch_protected_data("products", token)
    if products:
        print("\n📦 Products:")
        for product in products:
            print(f"- {product['name']} (ID: {product['id']})")

    # 3. Test /salts
    salts = fetch_protected_data("salts", token)
    if salts:
        print("\n🧂 Salts:")
        for salt in salts:
            print(f"- {salt['name']} (ID: {salt['id']})")