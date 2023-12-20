import {  useParams } from "react-router-dom"; // Import useParams from react-router-dom
import React from "react";
import { Link,} from "react-router-dom";
import "./ProductDetail.css";
import data from "./data/products"; // Import the productsData object


const ProductDetail = () => {
    const { productId } = useParams(); // Gets the product ID from the URL
    const product = data.products[productId]; // Retrieves the product object from the productsData object so that we can access its properties

    if (!product) { // Checks if the product exists 
        return <div>Product not found</div>; // If the product doesn't exist, return an error message
    }

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
           
                <nav>
                    <Link to="/">Back to Product List</Link>
                </nav>
              
            

        </div>
    )
    
}

export default ProductDetail