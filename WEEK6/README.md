# Week 6 - React Advanced Projects

## Overview
This folder contains advanced React projects focusing on component state management, context API, form handling, and full-stack development patterns.

## Projects Included

### 1. AddingUsers
- **Tech Stack**: React 19, Vite, Tailwind CSS
- **Description**: A React application for adding and managing users with a modern UI.
- **Features**:
  - User interface built with React components
  - Tailwind CSS for styling
  - Vite for fast development and bundling
  - ESLint for code quality

### 2. Context App
- **Tech Stack**: React 19, Vite, Tailwind CSS
- **Description**: Demonstrates the use of React Context API for state management across components.
- **Features**:
  - Context API for global state management
  - Component composition and prop drilling elimination
  - Tailwind CSS utility-first styling
  - Development and production build setup with Vite

### 3. Employee
- **Structure**: Full-stack project with separate backend and frontend
- **Backend** (`employee-backend/`):
  - Node.js/Express server
  - API endpoints for employee management
  - Database models for employee data
  
- **Frontend** (`frontend/`):
  - React 19 application
  - Vite bundler
  - Tailwind CSS styling
  
- **Testing**: `req.http` file for testing API endpoints

### 4. UserList
- **Tech Stack**: React 19, Vite, Tailwind CSS, React Hook Form
- **Description**: A user management application with advanced form handling.
- **Features**:
  - React Hook Form for optimized form state and validation
  - Tailwind CSS for responsive design
  - Vite development server and production build
  - ESLint for code quality

## Getting Started

### Install Dependencies
For each React project, navigate to the folder and install dependencies:

```bash
cd WEEK6/AddingUsers
npm install
npm run dev
```

```bash
cd WEEK6/context-app
npm install
npm run dev
```

```bash
cd WEEK6/userList
npm install
npm run dev
```

### Employee Full-Stack Project
Install both backend and frontend dependencies:

```bash
# Backend
cd WEEK6/employee/employee-backend
npm install
node server.js

# Frontend (in a new terminal)
cd WEEK6/employee/frontend
npm install
npm run dev
```

## Available Scripts

For all Vite-based projects:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Technologies Used
- **React** 19.2.4 - UI library
- **Vite** - Frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Efficient form state management (UserList only)
- **ESLint** - Code linting
- **Node.js/Express** - Backend (Employee project)

## Notes
- All React projects use ES modules (`type: module`)
- Tailwind CSS is configured via Vite plugin for optimal development experience
- The Employee project demonstrates full-stack architecture with separate API and frontend
- Each project includes `.gitignore` and configuration files for version control and linting
