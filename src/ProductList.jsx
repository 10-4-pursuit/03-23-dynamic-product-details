import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Switch, useParams, Link } from "react-router-dom";
import productsData from "./data/products.json";




function ProductList() {
// Get the array of product values
const productValues = Object.values(productsData.products);

    return (
        <ul>
      {productValues.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
    )
}

export default ProductList;