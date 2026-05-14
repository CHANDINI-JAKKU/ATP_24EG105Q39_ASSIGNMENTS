# Products React App

A simple React application that displays a catalog of products using mock data from FakeStoreAPI.

## Features
- Displays products in a responsive grid layout using Tailwind CSS.
- Component-based architecture (`App` -> `ProductList` -> `Product`).
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
- `src/Components/ProductList.jsx`: Maps over the products data.
- `src/Components/Product.jsx`: Displays individual product details.
- `src/data/products.js`: Contains the mock product data array.
