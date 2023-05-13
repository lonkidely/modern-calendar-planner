import React from 'react';
import './MainPage.scss'
import { Header } from '@components/Header/Header';

export const MainPage = () => {
    return (
        <div className="main_page">
            <Header />
            <div className="main_page_content">Пока что пустая страница</div>
        </div>
    );
};
