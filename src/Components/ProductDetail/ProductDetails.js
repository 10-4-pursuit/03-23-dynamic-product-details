import React from "react";
import products from '../data/products.json'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { productId } = useParams();
    
    const prodList = products.products[productId]

    return (
        <div>
           <h1>Product Details:</h1>
           <h2>{prodList.name}</h2>
           <p>{prodList.description}</p>
           <p>Price: ${prodList.price}</p>
        </div>
    );
};

export default ProductDetails;