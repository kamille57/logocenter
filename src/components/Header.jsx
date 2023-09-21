import React from "react";
import headerDropdownIcon from "../images/header__dropdown-icon.svg";
import headerLogo from '../images/logo.svg';

function Header() {
    return (
    <header className="header">
        <nav className="header__menu-container">
            <a className="header__homepage-link" href="http://ya.ru"> {/* поменять ссылку!! */}
                <img className="header__logo" src={headerLogo} />
            </a>
            <ul className="header__ul-container">
                <li className="header__li"><a className="header__link" href="#">Главная</a></li>
                <li className="header__li"><a className="header__link" href="#">О нас</a></li>
                <li className="header__dropdown-li">
                    <div className="header__dropdown-group">
                        <a className="header__dropdown-link" href="#">Направления
                            <img src={headerDropdownIcon} className="header__dropdown-icon" alt="#"/>
                        </a>
                    </div>
                    <ul className="header__dropdown-content">
                        <li className="header__dropdown-li_opened"><a className="header__link_opened" href="#">Дошкольный возраст</a></li>
                        <li className="header__dropdown-li_opened"><a className="header__link_opened" href="#">Школьный возраст</a></li>
                        <li className="header__dropdown-li_opened"><a className="header__link_opened" href="#">Подростки и взрослые</a></li>
                    </ul>
                </li>
                <li className="header__li"><a className="header__link" href="#">Галерея</a></li>
                <li className="header__li"><a className="header__link" href="#">Статьи</a></li>
                <li className="header__li"><a className="header__link" href="#">Услуги и цены</a></li>
                <li className="header__li"><a className="header__link" href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
