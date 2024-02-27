import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <Router>
      <ProductList />
        <Routes>
          <Route path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
