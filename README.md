# 📦 Inventory Management API

A simple RESTful API for managing products in an inventory. Built with **Node.js**, **Express**, and **MongoDB**.

## 🚀 Features

- ✅ User Registration & Login (with **JWT** Authentication)
- ✅ Add New Product
- ✅ Update Product Quantity
- ✅ Get Paginated List of Products

---

## 🗂️ Project Structure
inventory-management-api/
├── controllers/
│ ├── authController.js
│ └── productController.js
├── models/
│ ├── User.js
│ └── Product.js
├── routes/
│ ├── authRoutes.js
│ └── productRoutes.js
├── .env
├── server.js
├── README.md
├── package.json
└── swagger.yaml


---

## ⚙️ Installation

1️⃣ Clone the repository:

git clone https://github.com/UtkarshxDD/inventory-management-api.git
cd inventory-management-api

2️⃣ Install dependencies:
npm install

3️⃣ Create a .env file in the root directory:

MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000

4️⃣ Start the server:
npm start
