import React from "react";
import products from '../data/products.json'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { productId } = useParams();
    
    const product = products[productId];

    return (
        <div>
           <h1>Product Details</h1>
           <h2>{product.name}</h2>
           <p>{product.description}</p>
           <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;