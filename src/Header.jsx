import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">RemontPro</div>
      {/* <div className="menu-icon" onClick={toggleMenu}>
        ☰ 
      </div> */}
      <nav>
        <a href="#services">Услуги</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#contact">Контакты</a>
      </nav>

      <a
          href="https://t.me/remontprogroup"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          <FaTelegramPlane size={24} />
        </a>
    </header>
  );
};

export default Header;
