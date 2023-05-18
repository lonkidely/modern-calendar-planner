import {Link} from "react-router-dom";
import React from "react";

import './Signup.scss';

export const Signup: React.FC<unknown> = () => {
    return (
        <div className="modal__background js-modal__background">
            <div className="modal__window__signup js-modal__window">
                <div className="modal__window__flex js-modal__window__flex">
                    <div className="auth__wrapper__signup">
                        <div className="modal__signup">
                            <div className="modal__header">Регистрация</div>

                            <form className="modal__form js-modal__form" noValidate>
                                <div className="modal__wrapper__input">
                                    <input type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Фамилия" />
                                </div>
                    
                                <div className="modal__wrapper__input">
                                    <input type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Имя" />
                                </div>
                    
                                <div className="modal__wrapper__input">
                                    <input type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Отчество" />
                                </div>

                                <div className="modal__wrapper__input">
                                    <input type="text" onFocus={e => e.target.type='date'}
                                        className="modal__input js-modal__input" placeholder="Дата рождения"/>
                                </div>

                                <div className="modal__wrapper__input">
                                    <input type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Логин" />
                                </div>

                                <div className="modal__wrapper__input" id="signup_email">
                                    <input type="email" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Адрес электронной почты" />
                                </div>

                                <div className="modal__wrapper__input">
                                    <input type="password" maxLength={60} className="modal__input js-modal__input"
                                        placeholder="Введите пароль" />
                                </div>

                                <div className="modal__wrapper__input" id="confirm">
                                    <input type="password" maxLength={60} className="modal__input js-modal__input"
                                        placeholder="Подтвердите пароль" />
                                </div>

                                <button type="submit" className="modal__input__button-auth primary-btn-small">Зарегистрироваться</button>
                            </form>

                            <div className="modal__flex__center__div">
                                <div className="modal__text__alternative__page">У вас уже есть аккаунт?</div>
                                <div className="modal__signup__switch__btn">
                                    <Link to="/login" className="modal__signup__switch__link">
                                        <div className="primary-btn-small-link">Войти</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
