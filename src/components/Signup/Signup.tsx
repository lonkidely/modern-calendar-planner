import {Link, useNavigate} from 'react-router-dom';
import React from 'react';

import './Signup.scss';
import {useActions} from '@hooks/useActions';
import {User} from '@custom_types/User';

export const Signup: React.FC<unknown> = () => {
    const navigate = useNavigate();
    const closeSignup = (event) => {
        const modalForm = document.getElementsByClassName('modal__signup')[0];
        if (modalForm.contains(event.target)) {
            return;
        }
        navigate('/');
    };

    const {signupUser} = useActions();

    const signupFunc = (event) => {
        event.preventDefault();

        const user:User = {};

        const lastname = (document.getElementById('lastname') as HTMLInputElement).value;
        const firstname = (document.getElementById('firstname') as HTMLInputElement).value;
        const secondname = (document.getElementById('secondname') as HTMLInputElement).value;
        const birthday = new Date((document.getElementById('birthday') as HTMLInputElement).value);
        const login = (document.getElementById('login') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        const confirmpassword = (document.getElementById('confirmpassword') as HTMLInputElement).value;

        if (password !== confirmpassword) {
            return;
        }

        user.firstName = firstname;
        user.secondName = secondname;
        user.lastName = lastname;
        user.login = login;
        user.email = email;
        user.password = password;
        user.birthday = birthday;

        signupUser(user);

        (document.getElementById('lastname') as HTMLInputElement).value = '';
        (document.getElementById('firstname') as HTMLInputElement).value = '';
        (document.getElementById('secondname') as HTMLInputElement).value = '';
        (document.getElementById('birthday') as HTMLInputElement).value = '';
        (document.getElementById('login') as HTMLInputElement).value = '';
        (document.getElementById('email') as HTMLInputElement).value = '';
        (document.getElementById('password') as HTMLInputElement).value = '';
        (document.getElementById('confirmpassword') as HTMLInputElement).value = '';

        navigate('/');
    };

    return (
        <div className="modal__background js-modal__background" onClick={closeSignup}>
            <div className="modal__window__signup js-modal__window">
                <div className="modal__window__flex js-modal__window__flex">
                    <div className="auth__wrapper__signup">
                        <div className="modal__signup">
                            <div className="modal__header">Регистрация</div>

                            <form className="modal__form js-modal__form" noValidate>
                                <div className="modal__wrapper__input">
                                    <input id="lastname" type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Фамилия" />
                                </div>
                    
                                <div className="modal__wrapper__input">
                                    <input id="firstname" type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Имя" />
                                </div>
                    
                                <div className="modal__wrapper__input">
                                    <input id="secondname" type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Отчество" />
                                </div>

                                <div className="modal__wrapper__input">
                                    <input id="birthday" type="text" onFocus={e => e.target.type='date'}
                                        className="modal__input js-modal__input" placeholder="Дата рождения"/>
                                </div>

                                <div className="modal__wrapper__input">
                                    <input id="login" type="text" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Логин" />
                                </div>

                                <div className="modal__wrapper__input" id="signup_email">
                                    <input id="email" type="email" maxLength={45} className="modal__input js-modal__input"
                                        placeholder="Адрес электронной почты" />
                                </div>

                                <div className="modal__wrapper__input">
                                    <input id="password" type="password" maxLength={60} className="modal__input js-modal__input"
                                        placeholder="Введите пароль" />
                                </div>

                                <div className="modal__wrapper__input" id="confirm">
                                    <input id="confirmpassword" type="password" maxLength={60} className="modal__input js-modal__input"
                                        placeholder="Подтвердите пароль" />
                                </div>

                                <button type="submit" className="modal__input__button-auth primary-btn-small" onClick={signupFunc}>Зарегистрироваться</button>
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
