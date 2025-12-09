import './ProductCard.css';

export function ProductCard(image, name, price, description) {
    return (
        <div className="productCard">
            <img src={image} alt={name} className="productImage" />
            <h2 className="productName">{name}</h2>
            <p className="productPrice">{price} ₽</p>
            <p className="productDescription">{description}</p>
        </div>
    )
}