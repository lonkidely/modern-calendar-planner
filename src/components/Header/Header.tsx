import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

export const Header: React.FC<any> = () => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__menu">
                <Link to="#" className="header__menu__item">Мои цели</Link>
                <Link to="#" className="header__menu__item">Мои задачи</Link>
                <Link to="#" className="header__menu__item">Что-то ещё...</Link>
            </div>
            <div className="header__login__btn">
                <Link className="header__login__btn__text" to="#" >Войти</Link>
            </div>
        </header>
    );
}
