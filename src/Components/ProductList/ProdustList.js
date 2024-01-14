import React from "react";
import { Link } from 'react-router-dom'
import products from '../data/products.json'

const ProductList = () => {
   const prodList = products.products
   

   return (
    <div>
        <h1> Product List </h1>
        <ul>
            {Object.keys(prodList).map((productId) => 
               <li key={productId}>
                  <Link to={`/products/${productId}`}>{prodList[productId].name}</Link>
               </li>
            )}
        </ul>
    </div>
   );
};

export default ProductList; 