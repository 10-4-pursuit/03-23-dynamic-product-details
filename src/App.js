import logo from './logo.svg';
import './App.css';
import productsData from './data/products.json';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Products = () => {
  const productsArray = Object.values(productsData.products);

  return (
    <div>
        <ul>
        {productsArray.map((product) => (
            <li key={product.name}>
                <Link to={`/product/${product.name}`}>{product.name}</Link>
            </li>
      ))}
      </ul>
    </div>
  );
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/product/:productId' element={<ProductDetail/>} />
      </Routes>
    </Router>

  )
}

export default App



