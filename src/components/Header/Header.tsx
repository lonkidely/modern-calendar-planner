import React, {useState} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import {ProfileButton} from "@components/ProfileButton/ProfileButton";


export const Header: React.FC<unknown> = () => {
    const [auth, setAuth] = useState(false);
    return (
        <header className="header">
            <div className="main__container">
                <div className="header__content">
                    <Link to="/" className="header__logo"></Link>
                    <div className="header__menu">
                        <Link to="#" className="header__menu__item" onClick={() => setAuth(auth => !auth)}>Мои цели</Link>
                        <Link to="#" className="header__menu__item">Мои задачи</Link>
                        <Link to="#" className="header__menu__item">Взаимодействие</Link>
                        {auth && <Link to="#" className="header__menu__item">Профиль</Link>}
                    </div>
                    {!auth ?
                        <ProfileButton address={"/"} text={"Войти"} />
                        :
                        <ProfileButton address={"/"} text={"Выйти"} />
                    }
                </div>
            </div>
        </header>
    );
};
