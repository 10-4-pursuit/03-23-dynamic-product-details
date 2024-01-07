import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* Setting up routes for ProductList and ProductDetails components */}
      <Router>
          <Routes>
            <Route path='/' element={<ProductList />}/>
            <Route path='/products/:productId' element={<ProductDetails />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
