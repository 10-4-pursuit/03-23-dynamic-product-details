import React from 'react';
import { useParams } from 'react-router-dom'
import productsData from './data/products.json'
import ProductList from './ProductList';
import { Link, Switch } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import './productDetail.css'

function ProductDetail() {
   
    const { productId } = useParams();
    const item = productsData.products[productId];



if(!item) {
    return <div>
        Product not found!
    </div>
}

    return (
<div>
  
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        

        
          <Link to={`/`}>🛖</Link>
  
     
    </div>
    )
}

export default ProductDetail;