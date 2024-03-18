import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productData from "./data/products.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData.products);
  }, []);

  return (
    <ul>
      {Object.entries(products).map(([key, product]) => (
        <li key={key}>
            <Link to={`/product/${key}`}>{product.name}</Link> 
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
