# Week 3 - Backend 2

## Project Overview
This folder contains a Node.js backend project built with Express and MongoDB.
The application implements user and product APIs with authentication, authorization, CRUD operations, and data validation.

## Features
- User registration with password hashing using `bcryptjs`
- User login with JWT tokens stored as HTTP-only cookies
- Protected routes using a `verifyToken` middleware
- User and product CRUD operations
- Mongoose schemas with validation rules
- Centralized error handling for validation and cast errors

## Technologies Used
- Node.js
- Express
- MongoDB / Mongoose
- JWT (`jsonwebtoken`)
- Bcrypt (`bcryptjs`)
- Cookie Parser (`cookie-parser`)
- dotenv

## Folder Structure

```
WEEK-3/backend-2/
├── APIs/
│   ├── ProductAPI.js
│   └── UserAPI.js
├── auth/
│   └── auth.js
├── middlewares/
│   └── verifyToken.js
├── models/
│   ├── ProductModel.js
│   └── UserModel.js
├── node_modules/
├── package.json
├── package-lock.json
├── req.http
├── req1.http
├── server.js
└── .gitignore
```

## API Endpoints

### User APIs
- `POST /user-api/users` - Create a new user
- `POST /user-api/auth` - Login user and receive a JWT cookie
- `GET /user-api/users` - Get all users (protected)
- `GET /user-api/users/:id` - Get user by ID
- `PUT /user-api/users/:id` - Update user by ID
- `DELETE /user-api/users/:id` - Delete user by ID

### Product APIs
- `POST /product-api/products` - Create a new product
- `POST /product-api/auth` - Login product by productId and productName
- `GET /product-api/products` - Get all products (protected)
- `GET /product-api/products/:productId` - Get product by productId (protected)
- `PUT /product-api/products/:productId` - Update product by productId (protected)
- `DELETE /product-api/products/:productId` - Delete product by productId (protected)

## Getting Started

1. Install dependencies:

```bash
cd WEEK-3/backend-2
npm install
```

2. Start MongoDB locally

Make sure MongoDB is running locally and available at `mongodb://localhost:27017/anuragDB`.

3. Run the server:

```bash
node server.js
```

4. The server listens on port `3000`.

## Notes
- The project uses `type: module` in `package.json`, so ES module syntax is used throughout.
- Authentication tokens are stored in an HTTP-only cookie named `token`.
- The `verifyToken` middleware checks the cookie and protects the user/product list and detail routes.

## Sample Requests
Use `req.http` and `req1.http` to test the API endpoints with example requests for registration, login, and CRUD operations.
