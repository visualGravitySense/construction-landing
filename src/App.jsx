import React from 'react';

const App = () => {
  return (
    <>
      <header className="header">
        <div className="logo">RemontPro</div>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#portfolio">Портфолио</a>
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <div className="hero">
        <h1>Ремонт под ключ</h1>
        <p>Дома и квартиры с полным циклом работ. Мы создаем комфорт.</p>
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
        © 2025 RemontPro. Все права защищены.
      </footer>
    </>
  );
};

export default App;