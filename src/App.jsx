import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/Products/ProuctList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;