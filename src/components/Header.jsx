import React from "react";

function Header() {
    return (
    <header className="header">
        <nav class="header__menu-container">
            <ul className="header__ul-container">
                <li className="header__li"><a className="header__link" href="#">Главная</a></li>
                <li className="header__li"><a className="header__link" href="#">О нас</a></li>
                <li className="header__dropdown-li">
                    <a className="header__dropdown-link" href="#">Услуги &#9662;</a>
                    <ul className="header__dropdown-content">
                        <li className="header__dropdowm-li"><a className="header__link" href="#">Что-то</a></li>
                        <li className="header__dropdowm-li"><a className="header__link" href="#">Еще что-то</a></li>
                        <li className="header__dropdowm-li"><a className="header__link" href="#">И еще</a></li>
                    </ul>
                </li>
                <li className="header__li"><a className="header__link" href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;
