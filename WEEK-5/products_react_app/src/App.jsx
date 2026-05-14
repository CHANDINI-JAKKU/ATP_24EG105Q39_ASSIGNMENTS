import './App.css';
import ProductList from './Components/ProductList.jsx';

function App() {
  return (
    <div className="app-container">
      <h1 className="text-3xl font-bold text-center my-6">Product Catalog</h1>
      <ProductList />
    </div>
  );
}

export default App;