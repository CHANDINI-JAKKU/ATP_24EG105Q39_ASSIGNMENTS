# Blog App Backend

This is the backend server for the Blog Application, built using Node.js and Express. It provides robust RESTful APIs for user authentication, role-based access control, and content management, connected to a MongoDB database.

## Key Features & Functionalities

### 1. User Management & Authentication
- **Secure Registration & Login**: Implemented in `CommonAPI.js`. Passwords are securely hashed using `bcryptjs`.
- **JWT Authentication**: Uses `jsonwebtoken` for generating secure tokens, which are managed via HTTP-only cookies (`cookie-parser`) for enhanced security.
- **Role-Based Access**: Specialized APIs for different user roles:
  - `AdminAPI.js`: For administrative tasks and user management.
  - `AuthorAPI.js`: For authors to manage their articles.
  - `UserAPI.js`: For standard user operations.

### 2. Database Models (Mongoose)
The application uses MongoDB for data storage with structured Mongoose schemas:
- **UserModel**: Stores user information including `firstname`, `lastname`, `email`, hashed `password`, `role` (Admin/Author/User), `profileImageUrl`, and `isUserActive` status.
- **ArticleModel**: Stores article data including the `author` reference, `title`, `category`, `content`, `comments`, and `isArticleActive` status.

### 3. Media Upload Integration
- **Profile Images**: Supports uploading user profile images. Uses `multer` for parsing multipart/form-data and integrates with `cloudinary` for scalable cloud storage of media assets.

### 4. Technical Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB & Mongoose
- **Security & Auth**: bcryptjs, jsonwebtoken, cookie-parser, cors
- **File Uploads**: multer, cloudinary
- **Environment Management**: dotenv

## Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed, and set up a Cloudinary account if you plan to test image uploads.

### Setup Instructions
1. Clone the repository and navigate to the backend directory:
   ```bash
   cd blog-app-backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your environment variables (e.g., MongoDB URI, JWT Secret, Cloudinary credentials).
4. Start the development server:
   ```bash
   npm run dev
   ```
   *(Uses Node.js native `--watch` mode)*

The server will typically start on your configured port (e.g., `http://localhost:3000` or `5000`).
