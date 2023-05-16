import React from 'react';
import './Login.scss';
import {Link} from "react-router-dom";

export const Login: React.FC<unknown> = () => {
    return (
        <div>
            <div className="modal__background js-modal__background">
                <div className="modal__window js-modal__window">
                    <div className="modal__window__flex js-modal__window__flex">
                        <div className="auth__wrapper">
                            <div className="modal__login">
                                <div className="modal__header">Авторизация</div>

                                <form className="modal__form js-modal__form" noValidate>
                                    <div className="modal__wrapper__input js-modal__wrapper__input">
                                        <input type="email" maxLength={45} className="modal__input js-modal__input"
                                            placeholder="Введите логин или адрес электронной почты" />
                                    </div>

                                    <div className="modal__wrapper__input js-modal__wrapper__input" id="login_password">
                                        <input type="password" maxLength={60} className="modal__input js-modal__input"
                                            placeholder="Введите пароль" />
                                    </div>

                                    <button type="submit"
                                        className="modal__input__button-auth primary-btn-small">Войти
                                    </button>
                                </form>

                                <div className="modal__flex__center__div">
                                    <div className="modal__text__alternative__page">У вас ещё нет аккаунта?</div>
                                    <div className="modal__login__switch__btn">
                                        <Link to="/signup" className="modal__login__switch__link">
                                            <div className="primary-btn-small-link">Регистрация</div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
