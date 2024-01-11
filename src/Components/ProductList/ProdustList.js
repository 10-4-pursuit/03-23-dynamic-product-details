import React from "react";
import { Link } from 'react-router-dom'
import products from '../data/products.json'

const ProductList = () => {
   console.log("Products Data:", products);

   return (
    <div>
        <h1> Product List </h1>
        <ul>
            {Object.keys(products).map((productId) => 
               <li key={productId}>
                  <Link to={`/products/${productId}`}>{products[productId].name}</Link>
               </li>
            )}
        </ul>
    </div>
   );
};

export default ProductList; 