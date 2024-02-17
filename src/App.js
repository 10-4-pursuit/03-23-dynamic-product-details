import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ProductsDetails from './pages/ProductsDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductsDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
