import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import Home from './Components/Home/index.js'
import ProductList from './Components/ProductList/ProdustList.js'
import ProductDetails from './Components/ProductDetail/ProductDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
