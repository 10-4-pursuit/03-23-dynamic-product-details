import React from "react";
import { Link } from "react-router-dom";
import data from "./data/products";
import "./ProductList.css";


const ProductList = () => {
    const products = data.products // Retrieves the products object from the productsData object
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {/* Maps over the products object and returns a list item for each product. */  }
                {Object.keys(products).map(productId => (
                    <li key={productId}>
                        <Link to={`/products/${productId}`}>{products[productId].name}</Link>
                    </li>
                ))}
            </ul>
         
        </div>
    )
}

export default ProductList