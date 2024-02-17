import {useParams} from 'react-router-dom';
import data from '../data/products';
import {Link} from 'react-router-dom';

function ProductsDetails() {
    const {productId} = useParams();
    const product = data.products[productId];

    if (!product) {
        return <h2>Product not found</h2>
    }

    return (
        <div>
            <h1>Product Details</h1>
            <h2> Name:{product.name}</h2>
            <p> Description:{product.description}</p>
            <p>Price:${product.price}</p>
            <Link to="/">Back to Products</Link>
        </div>
    );
}

export default ProductsDetails;