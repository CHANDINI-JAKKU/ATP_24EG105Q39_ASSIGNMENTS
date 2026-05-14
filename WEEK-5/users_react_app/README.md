# Users React App

A simple React application that displays a list of user profiles using mock data.

## Features
- Displays users in a responsive grid layout using Tailwind CSS.
- Component-based architecture (`UsersList` -> `User`).
- Clean separation of mock data from components.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:5173/`

## Project Structure
- `src/components/UsersList.jsx`: Maps over the users data.
- `src/components/User.jsx`: Displays individual user profile cards.
- `src/data/users.js`: Contains the mock user data array.
