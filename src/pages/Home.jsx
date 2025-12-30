import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Добро пожаловать в GameTech</h1>
                    <p className="hero-subtitle">Лучшее игровое оборудование для настоящих геймеров</p>
                    <Link to="/catalog" className="hero-button">
                        Перейти в каталог
                    </Link>
                </div>
                <div className="hero-image">
                    <img src="public/photoCard/nofoto.png" alt="Игровое оборудование" />
                </div>
            </section>

            <section className="features">
                <h2 className="section-title">Почему выбирают нас</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3>Быстрая доставка</h3>
                        <p>Доставка по всей России за 2-7 дней</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">✅</div>
                        <h3>Гарантия качества</h3>
                        <p>Все товары с официальной гарантией производителя</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💬</div>
                        <h3>Поддержка 24/7</h3>
                        <p>Круглосуточная техническая поддержка</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💰</div>
                        <h3>Лучшие цены</h3>
                        <p>Конкурентные цены и регулярные акции</p>
                    </div>
                </div>
            </section>

            <section className="categories">
                <h2 className="section-title">Популярные категории</h2>
                <div className="categories-grid">
                    <Link to="/catalog" className="category-card">
                        <div className="category-icon">🖥️</div>
                        <h3>Системные блоки</h3>
                        <p>Мощные игровые компьютеры</p>
                    </Link>
                    <Link to="/catalog" className="category-card">
                        <div className="category-icon">💻</div>
                        <h3>Ноутбуки</h3>
                        <p>Игровые ноутбуки для мобильных геймеров</p>
                    </Link>
                    <Link to="/catalog" className="category-card">
                        <div className="category-icon">🎮</div>
                        <h3>Периферия</h3>
                        <p>Мыши, клавиатуры, наушники</p>
                    </Link>
                    <Link to="/catalog" className="category-card">
                        <div className="category-icon">🪑</div>
                        <h3>Гейминг кресла</h3>
                        <p>Эргономичные кресла для комфортной игры</p>
                    </Link>
                </div>
            </section>

            <section className="cta">
                <div className="cta-content">
                    <h2>Готовы начать?</h2>
                    <p>Выберите лучшее игровое оборудование в нашем каталоге</p>
                    <div className="cta-buttons">
                        <Link to="/catalog" className="cta-button primary">
                            Смотреть каталог
                        </Link>
                        <Link to="/contact" className="cta-button secondary">
                            Связаться с нами
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}