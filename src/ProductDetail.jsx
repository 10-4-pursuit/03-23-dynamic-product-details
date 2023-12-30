import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import productsData from './data/products.json'

function ProductDetail() {
    // const productValues = Object.values(productsData.products);
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const productValues = Object.values(productsData.products);
    // Fetch product data based on productId
    const fetchProduct = async () => {
      try {
        const fetchedProduct = productValues.find((product) => product.id === productId);
        setProduct(fetchedProduct);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProduct();
  }, [productId]); 

    return (
<div>
{isLoading && <p>Loading product details...</p>}
    {error && <p>Error loading product: {error.message}</p>}
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Display other product details */}
        </>
      )}
    </div>
    )
}

export default ProductDetail;