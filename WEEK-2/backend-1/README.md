# Backend-1: REST API with Node.js & Express

A simple REST API backend built using **Node.js** and **Express**, implementing full CRUD operations for Users and Products using in-memory storage.

---

## Setup

1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Server runs at: `http://localhost:3000`

---

## Project Structure

```
backend-1/
├── APIs/
│   ├── UserAPI.js       → User CRUD routes
│   └── ProductAPI.js    → Product CRUD routes
├── server.js            → Express app entry point
├── req.http             → REST Client test file
└── package.json
```

---

##  User API

**Base URL**: `http://localhost:3000/user-api`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get a user by ID |
| POST | `/users` | Create a new user |
| PUT | `/users` | Update an existing user |
| DELETE | `/users/:id` | Delete a user by ID |

---

##  Product API

**Base URL**: `http://localhost:3000/product-api`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/products` | Get all products |
| GET | `/products/:brand` | Get products by brand name |
| POST | `/products` | Create a new product |
| PUT | `/products` | Update an existing product |
| DELETE | `/products/:id` | Delete a product by ID |

---

##  Middleware

Two custom middlewares are applied globally to log each incoming request:
- **middleware1** — logs when a request is received
- **middleware2** — logs before forwarding to routes

---

##  Note

Data is stored **in-memory** using JavaScript arrays. All data will be lost when the server restarts.

---

##  Author
**Chandini Jakku** — ATP_24EG105Q39