import {Link } from 'react-router-dom';
import data from '../data/products';

function ProductsList() {
    
    const products = data.products
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {Object.keys(products).map((productId) => {
                    return (
                        <li key={productId}>
                        <Link to={`/products/${productId}`}>{products[productId].name}</Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductsList