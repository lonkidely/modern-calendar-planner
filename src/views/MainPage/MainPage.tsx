import React from 'react';
import './MainPage.scss';
import { Header } from '@components/Header/Header';
import {NotesPanel} from "@components/NotesPanel/NotesPanel";

export const MainPage = () => {
    return (
        <div className="main_page">
            <Header />
            <div className="main">
                <NotesPanel />
                <div className="main__container">
                    <div className="main_page_content">
                        Пока что пустая страница
                    </div>
                </div>
            </div>
        </div>
    );
};