import React, {useState} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import {ProfileButton} from "@components/ProfileButton/ProfileButton";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {Button} from "react-bootstrap";

export const Header: React.FC<unknown> = () => {
    const {user} = useTypedSelector(state => state.user);

    const [isOpenNotes, setIsOpenNotes] = useState(true);
    const [isOpenTasks, setIsOpenTasks] = useState(true);
    const updateLeftPanel = () => {
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
        setIsOpenTasks(state => !state);
        isOpenTasks === false ?
            document.getElementsByClassName('right_panel')[0].classList.add('right_panel_hidden')
            :
            document.getElementsByClassName('right_panel')[0].classList.remove('right_panel_hidden');
    };

    return (
        <header className="header">
            {user && <div className="header__panel_buttons">
                <Button className="header__panel_buttons__btn" onClick={updateLeftPanel}>Заметки</Button>
            </div>}
            <div className="main__container">
                <div className="header__content">
                    <Link to="/" className="header__logo"></Link>
                    <div className="header__menu">
                        <Link to="/" className="header__menu__item">Календарь</Link>
                        <Link to="/goals" className="header__menu__item">Мои цели</Link>
                        <Link to="/tasks" className="header__menu__item">Мои задачи</Link>
                    </div>
                    {user === null ?
                        <ProfileButton address={"/login"} text={"Войти"} />
                        :
                        <ProfileButton address={"/logout"} text={"Выйти"} />
                    }
                </div>
            </div>
            {user && <div className="header__panel_buttons">
                <Button className="header__panel_buttons__btn" onClick={updateRightPanel}>Задачи</Button>
            </div>}
        </header>
    );
};
