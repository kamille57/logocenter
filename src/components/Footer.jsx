import React from "react";
import footerLogo from "../images/logo.svg";
import visaImage from "../images/visa_img.svg";
import masterCardImage from "../images/mastercard_img.svg";
import mirCardImage from "../images/mir_img.svg";
import faceBook from "../images/facebook_img.svg";
import twitter from "../images/twitter_img.svg";
import vkImage from "../images/vk_img.svg";
import youTube from "../images/youtube_img.svg";


function Footer() {
  return (
      <footer className="footer">
          <div className="footer__columns">
            <div className="footer__column footer__column_content_copyright">
              <img src={footerLogo} alt="" className="logo logo__place_footer" />
              <p className="footer__text footer__text_description">Language2Go — интерактивная платформа для легкого, удобного и быстрого изучения иностранных языков.</p>
              <div className="footer__payment">
                <a href="#" className="footer__link"><img src={visaImage} alt="Виса" className="footer__payment-icon" /></a>
                <a href="#" className="footer__link"><img src={masterCardImage} alt="МастерКард" className="footer__payment-icon" /></a>
                <a href="#" className="footer__link"><img src={mirCardImage} alt="МИР" className="footer__payment-icon" /></a>
              </div>
            </div>
            <div className="footer__column">
              <h2 className="footer__column_heading footer__column_content_education">Обучение</h2>
              <nav className="footer__column_links">
                <a href="#" className="footer__column_link">Все языки</a>
                <a href="#" className="footer__column_link">Взрослым</a>
                <a href="#" className="footer__column_link">Детям и подросткам</a>
                <a href="#" className="footer__column_link">Мини-курсы</a>
                <a href="#" className="footer__column_link">Тренажеры</a>
                <a href="#" className="footer__column_link">Индивидуальные занятия</a>
              </nav>
            </div>
            <div className="footer__column">
              <h2 className="footer__column_heading footer__column_content_info">Информация</h2>
              <nav className="footer__column_links">
                <a href="#" className="footer__column_link">О нас</a>
                <a href="#" className="footer__column_link">Отзывы</a>
                <a href="#" className="footer__column_link">Новости</a>
                <a href="#" className="footer__column_link">Частые вопросы</a>
                <a href="#" className="footer__column_link">Условия оплаты</a>
                <a href="#" className="footer__column_link">Контакты</a>
              </nav>
            </div>
            <div className="footer__column">
              <h2 className="footer__column_heading footer__column_content_social">Контакты</h2>
              <p className="footer__text footer__text_contact-number">+7 (495) 156-35-50</p>
              <p className="footer__text footer__text_contact-info">info@language2go.ru</p>
              <p className="footer__text footer__text_contact-info">support@language2go.ru</p>
              <p className="footer__text footer__text_contact-info">101000, Москва, Россия</p>
              <div className="footer__social">
                <a href="#" className="footer__link"><img src={faceBook} alt="" className="footer__social-icon" /></a>
                <a href="#" className="footer__link"><img src={youTube} alt="Ютуб" className="footer__social-icon" /></a>
                <a href="#" className="footer__link"><img src={vkImage} alt="Вконтакте" className="footer__social-icon" /></a>
                <a href="#" className="footer__link"><img src={twitter} alt="Твиттер" className="footer__social-icon" /></a>
              </div>
            </div>
          </div>
          <div className="footer__type_black">
              <div className="footer__copyrights">
                <p className="footer__author">© 2022 Language to go</p>
                <div className="footer__law-info">
                  <a href="#" className="footer__link footer__link_type_law">Правовая оговорка</a>
                  <a href="#" className="footer__link footer__link_type_law">Пользовательское соглашение</a>
                  <a href="#" className="footer__link footer__link_type_law">Политика конфиденциальности</a>
                </div>
              </div>
            </div>
      </footer>
  );
}

export default Footer;
