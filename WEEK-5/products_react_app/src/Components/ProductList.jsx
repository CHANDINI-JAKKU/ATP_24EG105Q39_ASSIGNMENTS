import Product from './Product.jsx';
import { products } from '../data/products.js';

function ProductList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-2xl my-0.5 mx-0.5 gap-6">
      {products.map((product) => (
        <Product productObj={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
