import './Pages.css';

export default function About() {
    return (
        <div className="page-container">
            <h1>Обо мне</h1>
            <p>Добро пожаловать в мой магазин игрового оборудования!</p>
            <div className="about-content">
                <div className="about-section">
                    <h2>Наша миссия</h2>
                    <p>Предоставлять лучшие игровые решения для всех уровней геймеров.</p>
                </div>
                <div className="about-section">
                    <h2>Контакты</h2>
                    <p>Email: ovsyansuper228@gmail.com</p>
                    <p>Телефон: +7 (929) 987-65-33</p>
                </div>
            </div>
        </div>
    );
}