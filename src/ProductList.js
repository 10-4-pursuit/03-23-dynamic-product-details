import React from 'react';
import { Link } from 'react-router-dom';
import productData from './data/products.json'

const ProductList = () => {
  // Extracting the products from the imported data
  const products = productData.products;
  return (
      <div className='details'>
          <h1>Products</h1>
          
          {/* Object.keys() gets all product IDs and .map iterates through each ID to display product links */}
          {Object.keys(products).map(productId => (
          <h2 key={productId}>
            {/* Creating a link for each product with the respective product ID */}
            <Link to={`/products/${productId}`}>{products[productId].name}</Link>
          </h2>
          ))}
      </div>
  )
}

export default ProductList;