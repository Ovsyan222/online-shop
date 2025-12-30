import './Pages.css';

export default function Account() {
    return (
        <div className="page-container">
            <h1>Личный кабинет</h1>
            <div className="account-info">
                <div className="profile-section">
                    <h2>Профиль</h2>
                    <p>Имя пользователя: Гость</p>
                    <p>Email: Не указан</p>
                </div>
                <div className="orders-section">
                    <h2>Мои заказы</h2>
                    <p>У вас пока нет заказов</p>
                </div>
            </div>
        </div>
    );
}