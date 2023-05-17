import React from 'react';
import './MainSignup.scss';
import { Header } from '@components/Header/Header';
import {NotesPanel} from "@components/NotesPanel/NotesPanel";
import {Signup} from "@components/Signup/Signup";

export const MainSignup = () => {
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
                <Signup />
            </div>
        </div>
    );
};
