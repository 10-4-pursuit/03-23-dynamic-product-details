import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch, useParams, Link } from "react-router-dom";
import productsData from "./data/products";
import './productList.css'




function ProductList() {
 
const productValues = productsData.products



    return (
        <React.Fragment> 
        <h1>Shine Bright Like A Healing Crystal </h1>
        <ul>
      {Object.keys(productValues).map(productItem => (
        <li key={ productItem  }>
          <Link to={`/product/${ productItem }`}>{productValues[productItem].name}</Link>
         
       </li>
      ))}
    </ul>
    </React.Fragment>   

    )
   
}



export default ProductList;



