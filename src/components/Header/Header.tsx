import React, {useState} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import {ProfileButton} from "@components/ProfileButton/ProfileButton";
import {useTypedSelector} from "@hooks/useTypedSelector";

export const Header: React.FC<unknown> = () => {
    const {user} = useTypedSelector(state => state.user);
    const [isOpenNotes, setIsOpenNotes] = useState(true);
    const [isOpenRightPanel, setIsOpenRightPanel] = useState(true);
    const updateNotes = () => {
        if (document.getElementsByClassName('notes_panel').length === 0) {
            return;
        }
        setIsOpenNotes(state => !state);
        isOpenNotes === false ?
            document.getElementsByClassName('notes_panel')[0].classList.add('notes_panel_hidden')
            :
            document.getElementsByClassName('notes_panel')[0].classList.remove('notes_panel_hidden');
    };

    const updateRightPanel = () => {
        if (document.getElementsByClassName('right_panel').length === 0) {
            return;
        }
        setIsOpenRightPanel(state => !state);
        isOpenRightPanel === false ?
            document.getElementsByClassName('right_panel')[0].classList.add('right_panel_hidden')
            :
            document.getElementsByClassName('right_panel')[0].classList.remove('right_panel_hidden');
    };

    return (
        <header className="header">
            <div className="main__container">
                <div className="header__content">
                    <Link to="/" className="header__logo"></Link>
                    <div className="header__menu">
                        <Link to="#" className="header__menu__item">Мои цели</Link>
                        <Link to="#" className="header__menu__item" onClick={updateNotes}>Мои задачи</Link>
                        <Link to="#" className="header__menu__item" onClick={updateRightPanel}>Взаимодействие</Link>
                        {user !== null && <Link to="#" className="header__menu__item">Профиль</Link>}
                    </div>
                    {user === null ?
                        <ProfileButton address={"/login"} text={"Войти"} />
                        :
                        <ProfileButton address={"/logout"} text={"Выйти"} />
                    }
                </div>
            </div>
        </header>
    );
};
