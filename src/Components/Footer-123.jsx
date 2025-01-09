import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer-123.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Aimo ❤️</h1>
          <p>С любовью для вас 💜</p>
        </div>
        <nav className="footer-links">
          <ul>
            
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/shop">Магазин</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/love">Murka 🌸</Link></li>
          </ul>
        </nav>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aimo. Все права защищены.</p>
      </div>
    </footer>
  );
}

export default Footer;
