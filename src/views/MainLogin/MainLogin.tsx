import React from 'react';
import './MainLogin.scss';
import { Header } from '@components/Header/Header';
import {NotesPanel} from "@components/NotesPanel/NotesPanel";
import {Login} from "@components/Login/Login";

export const MainLogin = () => {
    return (
        <div className="main_page">
            <Header />
            <div className="main">
                <NotesPanel />
                <div className="main__container">
                    <div className="main_login_content">
                        Пока что пустая страница
                    </div>
                </div>
                <Login />
            </div>
        </div>
    );
};
