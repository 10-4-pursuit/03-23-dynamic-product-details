import React from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json"

function ProductList() {
    return (
        <div>
            <h1>List of Products</h1>
            <hr/>
            {Object.entries(data.products).map(([productId, product]) =>(
                <div key={productId}>
                    <Link to={`/product/${productId}`}>{product.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default ProductList;