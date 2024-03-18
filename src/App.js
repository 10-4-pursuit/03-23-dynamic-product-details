
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

function App() {
  return (
   <Router>
    <nav className='nav'>
<Link to='/'>Home</Link>
    </nav>
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/product/:productId' element={<ProductDetail />} />
    </Routes>
   </Router>
  );
}

export default App;
