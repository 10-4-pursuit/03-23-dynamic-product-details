import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch, useParams, Link } from "react-router-dom";
import productsData from "./data/products";




function ProductList() {
 
// const productValues = (productsData.products);

const productValues = productsData.products
console.log(productValues)


    return (
        
        <ul>
      {Object.keys(productValues).map(productItem => (
        <li key={ productItem  }>
          <Link to={`/product/${ productItem }`}>{productValues[productItem].name}</Link>
         
       </li>
      ))}
    </ul>

    )
   
}



export default ProductList;



