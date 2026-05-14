# Week 3 - Backend 2: REST API with Authentication & MongoDB

## Project Overview

This project is a Node.js/Express backend that implements **full CRUD operations** for **Users** and **Products** with **JWT-based authentication**. Data is stored in MongoDB using Mongoose.

The key learning in this week is implementing **protected routes** — routes that only logged-in users can access, verified using a **JWT token stored in an HTTP-only cookie**.

---

## How Authentication Works

1. User/Product **registers** → password is **hashed** using bcryptjs before saving to DB.
2. User/Product **logs in** → password is compared with the stored hash.
3. On successful login → a **JWT token is signed** and stored in an **HTTP-only cookie**.
4. For **protected routes** → the `verifyToken` middleware reads the cookie, verifies the token, and allows/blocks the request.

---

## Technologies Used

| Technology | Purpose |
| :--- | :--- |
| Node.js | JavaScript runtime |
| Express | Web framework and routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM for schema and validation |
| bcryptjs | Password hashing and comparison |
| jsonwebtoken | JWT token signing and verification |
| cookie-parser | Reading cookies from HTTP requests |

---

## Project Structure

```
backend-2/
├── APIs/
│   ├── UserAPI.js        → User login and CRUD routes
│   └── ProductAPI.js     → Product login and CRUD routes
├── middlewares/
│   └── verifyToken.js    → JWT verification middleware
├── models/
│   ├── UserModel.js      → Mongoose schema for users
│   └── ProductModel.js   → Mongoose schema for products
├── server.js             → App entry point, DB connection, error handler
├── req.http              → Sample HTTP requests for User API
├── req1.http             → Sample HTTP requests for Product API
└── package.json
```

---

## Data Models

### User Schema
| Field | Type | Validation |
| :--- | :--- | :--- |
| username | String | Required, min 4 chars, max 6 chars |
| password | String | Required (stored as bcrypt hash) |
| email | String | Required, must be unique |
| age | Number | Optional |

### Product Schema
| Field | Type | Validation |
| :--- | :--- | :--- |
| productId | Number | Required |
| productName | String | Required |
| price | Number | Required, min 10000, max 50000 |
| brand | String | Required |

---

## API Endpoints

### User API (`/user-api`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| POST | `/user-api/users` | No | Register a new user |
| POST | `/user-api/auth` | No | Login — returns JWT in cookie |
| GET | `/user-api/users` | Yes | Get all users |
| GET | `/user-api/users/:id` | No | Get a user by MongoDB ID |
| PUT | `/user-api/users/:id` | No | Update a user by ID |
| DELETE | `/user-api/users/:id` | No | Delete a user by ID |

### Product API (`/product-api`)

| Method | Endpoint | Auth Required | Description |
| :--- | :--- | :---: | :--- |
| POST | `/product-api/products` | No | Add a new product |
| POST | `/product-api/auth` | No | Login — returns JWT in cookie |
| GET | `/product-api/products` | Yes | Get all products |
| GET | `/product-api/products/:productId` | Yes | Get product by productId |
| PUT | `/product-api/products/:productId` | Yes | Update product by productId |
| DELETE | `/product-api/products/:productId` | Yes | Delete product by productId |

---

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

### Steps

1. Install dependencies:
   ```
   npm install
   ```

2. Make sure MongoDB is running locally.

3. Start the server:
   ```
   node server.js
   ```

4. Server starts at: `http://localhost:3000`

---

## Key Concepts

- **Password Hashing**: Passwords are never stored as plain text. `bcryptjs` hashes them with a salt of 10 rounds before saving.
- **JWT Authentication**: On login, a token is signed with a secret key and stored in an HTTP-only cookie, making it inaccessible to JavaScript (prevents XSS).
- **Protected Routes**: The `verifyToken` middleware validates the cookie token before allowing access to sensitive routes.
- **Error Handling**: A global error handler at the end of `server.js` catches Mongoose `ValidationError` and `CastError` and returns clean error messages.
- **ES Modules**: The project uses `"type":"module"` in `package.json`, so `import/export` syntax is used throughout.

---
