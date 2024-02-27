import productContainer from './data/products.json';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    let { productId } = useParams();
    const { products } = productContainer;
    const targetProduct = products[productId];
    return (
        <div className={`products-description product-${productId}`} id={`product-${productId}`}>
            <p>{targetProduct.name}</p>
            <p>{targetProduct.description}</p>
            <p>{targetProduct.price}</p>
        </div>
    )
}
export default ProductDetail;