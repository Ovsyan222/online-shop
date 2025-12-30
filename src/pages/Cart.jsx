import './Pages.css';

export default function Cart() {
    return (
        <div className="page-container">
            <h1>Корзина</h1>
            <div className="cart-empty">
                <p>Ваша корзина пуста</p>
                <p>Добавьте товары из каталога</p>
            </div>
        </div>
    );
}