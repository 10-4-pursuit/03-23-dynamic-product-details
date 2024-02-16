import { useParams, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import productsData from '../src/data/products.json';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Product List</Link>
        </nav> 
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      {Object.keys(productsData.products).map((productId) => {
      const product = productsData.products[productId];
      return (
      <div key={productId}>
        <Link to={`/products/${productId}`}>{product.name}</Link>
      </div>
      );
    })}
    </div>
  );
}

function ProductDetail() {
  let { productId } = useParams();
  const product = productsData.products[productId];
  return (
    <div>
      <h1>Product Detail</h1>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
export default App;
