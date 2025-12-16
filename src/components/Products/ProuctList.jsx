import { products } from '../../data/products.data';
import ProductCard from './ProductCard';
import './ProductList.css'
 
export default function ProductList() {
    return (
        <div className='productListMain'>
            <div className="productList">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}