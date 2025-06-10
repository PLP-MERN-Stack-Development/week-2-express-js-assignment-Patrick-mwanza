# Product API

## This is a simple RESTful API for managing products, built with Node.js, Express, and MongoDB.

## Features
Create a new product

Get all products

Get a single product by ID

Update a product by ID

Delete a product by ID

##  Getting Started
## Prerequisites
Node.js installed

MongoDB installed and running locally or on a cloud service (MongoDB Atlas)

Installation

## Clone this repository:
git clone <https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Patrick-mwanza.git>
cd <cd week-2-express-js-assignment-Patrick-mwanza>

# API Endpoints
### Base URL
<http://localhost:3000>

 # Endpoints

### Endpoints

####  Create a New Product

- **URL:** `/products`
- **Method:** `POST`
- **Request Body Example:**

    ```json
    {
        "name": "Wireless Mouse",
    "price": 25.99,
    "description": "Ergonomic wireless mouse with adjustable DPI.",
    "category": "Electronics",
    "instock": 50
    }
    {
    "name": "Bluetooth Headphones",
    "price": 59.99,
    "description": "Wireless Bluetooth headphones with noise cancellation.",
    "category": "Electronics",
    "instock": 35
}

    ```


---

#### 📋 Get All Products

- **URL:** `/products`
- **Method:** `GET`

- **Response Example:**

    ```json
    [
       
    {
        "_id": "60abcdef1234567890abcdef",
        "name": "Wireless Mouse",
        "price": 25.99,
        "description": "Ergonomic wireless mouse with adjustable DPI.",
        "category": "Electronics",
        "instock": 50,
        "__v": 0
    },
    {
        "_id": "60abc1234567890def123456",
        "name": "Bluetooth Headphones",
        "price": 59.99,
        "description": "Wireless Bluetooth headphones with noise cancellation.",
        "category": "Electronics",
        "instock": 35,
        "__v": 0
    }
    ]


    
    ```

---

#### 🔍 Get a Single Product by ID

- **URL:** `/products/:id`
- **Method:** `GET`

- **Response Example:**

    ```json
    {
       "_id": "60abc1234567890def123456",
        "name": "Bluetooth Headphones",
        "price": 59.99,
        "description": "Wireless Bluetooth headphones with noise cancellation.",
        "category": "Electronics",
        "instock": 35,
        "__v": 0
    }
    ```

---

####  Update a Product by ID

- **URL:** `/products/:id`
- **Method:** `PUT`
- **Request Body Example:**

    ```json
    {
        "price": 39.99,
        "instock": 50
    }
    ```

- **Response Example:**

    ```json
    {
        "_id": "60abc1234567890def123456",
        "name": "Bluetooth Headphones",
        "price": 39.99,
        "description": "Wireless Bluetooth headphones with noise cancellation.",
        "category": "Electronics",
        "instock": 50,
        "__v": 0
    }
    ```

---

####  Delete a Product by ID

- **URL:** `/products/:id`
- **Method:** `DELETE`

- **Response Example:**

    ```json
    {   " _id": "60abcdef1234567890abcdef",
        "name": "Wireless Mouse",
        "price": 25.99,
        "description": "Ergonomic wireless mouse with adjustable DPI.",
        "category": "Electronics",
        "instock": 50,
        "__v": 0
    }
    ```

---

## ⚙️ Environment Variables


- `MONGO_URI` — MongoDB connection URI (example: `mongodb://localhost:27017/productdb`)
- `PORT` — Server port (example: `3000`)

---

##  Example `.env.example`

```env
# MongoDB connection URI
MONGO_URI=mongodb://localhost:27017/productdb

# Server port
PORT=3000

<img width="888" alt="image" src="https://github.com/user-attachments/assets/259000e8-11bd-4c0d-95f0-fa7df8cfdc98" />

