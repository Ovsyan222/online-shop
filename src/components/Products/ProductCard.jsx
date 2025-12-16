import './ProductCard.css';

export default function ProductCard({ image, name, price, description }) {
    return (
        <div className="productCard">
            <img src={image} alt={name} className="productImage" />
            <h2 className="productName">{name}</h2>
            <p className="productDescription">{description}</p>
            <p className="productPrice">{price.toLocaleString('ru-RU')} ₽</p>
        </div>
    );
}