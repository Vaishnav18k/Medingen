
# Medingen

Medingen is a full-stack medicine web application and management platform. This project uses a modern tech stack including Flask for the backend, React.js for the frontend, MySQL for the database, and JWT for secure authentication. It is optimized using Bun.js for fast frontend development.

## 📁 Project Structure

```
Medingen-VAISHNAV.K/
├── medingen-backend/
│   └── app.py
└── medingen-frontend/
    └── medingen/
```

---

## 🚀 Tech Stack

### 🔧 Backend
- Python Flask
- MySQL
- JWT (JSON Web Tokens) for authentication

### 💻 Frontend
- React.js
- Axios (for API communication)
- React Router DOM
- MDB React UI Kit
- React Icons & HugeIcons
- React Spinners
- jwt-decode

### ⚡ Build Tool / Runtime
- Bun.js

---

## 🧠 Prerequisites

Make sure the following are installed:

- Python 3.10+
- MySQL Server
- Node.js (Optional, Bun.js replaces it)
- [Bun.js](https://bun.sh/docs/installation)
- pip (Python package installer)

---

## 🛠️ Setup Instructions

### 🔙 Backend

1. Navigate to the backend folder:
   ```bash
   cd medingen-backend
   ```

2. Install the required Python packages:
   *(Include this if you have a `requirements.txt`, or list dependencies manually)*
   ```bash
   pip install flask flask-cors flask-mysqldb PyJWT
   ```

3. Run the Flask backend:
   ```bash
   python app.py
   ```

> ⚠️ Ensure your MySQL server is running and the Flask app is correctly connected to the database.

---

### 🎨 Frontend

1. Navigate to the frontend working directory:
   ```bash
   cd medingen-frontend/medingen
   ```

2. Install frontend dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

> Make sure the backend API is running for the frontend to function properly.

---

## 📦 Frontend Dependencies

Below are the key dependencies used in the frontend:
```json
{
  "@hugeicons/react": "^1.0.5",
  "axios": "^1.9.0",
  "jwt-decode": "^4.0.0",
  "mdb-react-ui-kit": "^9.0.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.6.1",
  "react-spinners": "^0.17.0"
}
```

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software with attribution.

---

## ✨ Acknowledgements

Developed by Vaishnav K and with the help of Qwen3 AI  with the part of a full-stack medicine web  application project using modern JavaScript and Python frameworks.
