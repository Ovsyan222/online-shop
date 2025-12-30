import './Pages.css';

export default function Contact() {
    return (
        <div className="page-container">
            <h1>Обратная связь</h1>
            <div className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Введите ваш email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" rows="5" placeholder="Введите ваше сообщение"></textarea>
                </div>
                <button className="submit-btn">Отправить</button>
            </div>
        </div>
    );
}