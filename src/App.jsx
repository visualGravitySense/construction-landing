import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Header from './Header';

const App = () => {
  return (
    <>
      {/* <header className="header">
        <div className="logo">RemontPro</div>
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
      </header> */}

      <Header />

      <div className="hero">
        <h1>Капитальный ремонт под ключ</h1>
        <p>
          Мы создаем уют и комфорт в вашем доме. Полный цикл услуг — от проектирования
          до финишной отделки.
        </p>
        <a href="#services" className="cta">Подробнее</a>
      </div>


      <section className="section" id="services">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services">
          <div className="service">
            <h3>Дизайн-проект</h3>
            <p>Создание уникального интерьера под ваш стиль.</p>
          </div>
          <div className="service">
            <h3>Черновая отделка</h3>
            <p>Полное выравнивание стен, полов и потолков.</p>
          </div>
          <div className="service">
            <h3>Чистовая отделка</h3>
            <p>Качественная отделка с использованием лучших материалов.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 RemontPro. Все права защищены.</p>
        <a
          href="https://t.me/remontprogroup"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          <FaTelegramPlane size={24} /> Подписаться на наш Telegram
        </a>
      </footer>
    </>
  );
};

export default App;