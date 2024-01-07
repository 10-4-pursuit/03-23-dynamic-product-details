import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productData from './data/products.json'

const ProductDetails = () => {
    // Extracting the productId parameter from the URL
    const { productId } = useParams();

    // Retrieving the product details based on the productId
    const product = productData.products[productId];

    return (
        <div className='details'>
            <h1>{product.name} Details</h1>
            {/* Displaying product details */}
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            
            {/* Adding a link to navigate back to the product list */}
            <footer>
                <Link to="/">Back</Link>
            </footer>
        </div>
    )
    
}

export default ProductDetails;