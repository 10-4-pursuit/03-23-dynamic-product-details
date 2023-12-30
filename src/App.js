import ProductList from './ProductList';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <BrowserRouter>
   <Routes>
<Route path="/" element={<ProductList />} />
  <Route path="/product/:productId" element={<ProductDetail />} />
</Routes>

</BrowserRouter>
  );
}

export default App;
