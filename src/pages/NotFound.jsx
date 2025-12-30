import './Pages.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="page-container">
            <h1>404 - Страница не найдена</h1>
            <p>Извините, запрашиваемая страница не существует.</p>
            <Link to="/" className="back-link">
                Вернуться на главную
            </Link>
        </div>
    );
}