import React from "react";
import { useParams } from 'react-router-dom'
import productData from './data/products.json'

const ProductDetail = () => {
    const {productId } = useParams();
    const product = productData.products[productId]

    if(!product) {
        return <div>Product unavailable</div>;
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <h3>{product.description}</h3>
            <h3>Price: ${product.price}</h3>
        </div>
    )
}

export default ProductDetail;