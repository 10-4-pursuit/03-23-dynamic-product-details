import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <ProductList/>
    </div>

    <Routes>
      <Route path='/product/:productId' element={<ProductDetail/>}/>
    </Routes>
    </Router>
  );
}

export default App;
