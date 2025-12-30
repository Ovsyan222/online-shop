import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <Link to="/">
                    <img src="public/icons/Logo.png" alt="logo" className='logo'/>
                </Link>
                <div className='menu'>
                    <ul className='menu-item'>
                        <li className='item'>
                            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Главная
                            </Link>
                        </li>
                        <li className='item'>
                            <Link to="/catalog" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Каталог
                            </Link>
                        </li>
                        <li className='item'>
                            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Обо мне
                            </Link>
                        </li>
                        <li className='item'>
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Обратная связь
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <button className='basketButton'>
                        Корзина<img src="public/icons/iconBasket.png" alt="basket" />
                    </button>
                </Link>
                <Link to="/account" style={{ textDecoration: 'none' }}>
                    <button className='account'>
                        Личный кабинет<img src="public/icons/iconAccount.png" alt="account" />
                    </button>
                </Link>
            </nav>
        </header>
    )
}