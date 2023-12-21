import React from "react";
import { useParams } from 'react-router-dom';
import data from '../data/products.json';

function ProductDetail() {
    const { productId } = useParams();
    const product = data.products[productId];

    if(!product) {
        return <div>
            Product not found!
        </div>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    )
}

export default ProductDetail;