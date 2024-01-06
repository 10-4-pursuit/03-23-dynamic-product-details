import React from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from './data/products.json';




const ProductDetail = () => {
  const { productId } = useParams();
  
  const product = Object.values(productsData.products).find(p=> p.name === productId);
  

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;