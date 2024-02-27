import productContainer from './data/products.json';
import { Link } from 'react-router-dom';

const ProductList = function () {
    const { products } = productContainer;
    for (const productsId in products) {
        const product = products[productsId];
        product.id = productsId
    }
    return (
        <ul>
            {Object.values(products).map(product => (
                <li className={`products product-${product.id}`} id={product.id} key={product.id}>
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                </li>
            ))}
        </ul>
    )
}
export default ProductList;