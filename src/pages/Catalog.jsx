import ProductList from '../components/Products/ProuctList';
import './Pages.css';

export default function Catalog() {
    return (
        <div className="page-container">
            <h1>Каталог товаров</h1>
            <ProductList />
        </div>
    );
}