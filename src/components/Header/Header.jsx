import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <nav className='navbar'>
                <img src="public\icons\Logo.png" alt="logo" className='logo'/>
                <div className='menu'>
                    <ul className='menu-item'>
                        <li className='item'>Каталог</li>
                        <li className='item'>Обо мне</li>
                        <li className='item'>Обратная связь</li>
                    </ul>
                </div>
                <button className='basketButton'>Корзина<img src="public\icons\iconBasket.png" alt="basket" /></button>
                <button className='account'>Личный кабинет<img src="public\icons\iconAccount.png" alt="account" /></button>
            </nav>
        </header>
    )
}