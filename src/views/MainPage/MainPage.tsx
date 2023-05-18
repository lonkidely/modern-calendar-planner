import React from 'react';
import './MainPage.scss';
import { Header } from '@components/Header/Header';
import {NotesPanel} from "@components/NotesPanel/NotesPanel";
import {RightPanel} from "@components/RightPanel/RightPanel";
import {NewGoal} from "@components/NewGoal/NewGoal";
import {NewTask} from "@components/NewTask/NewTask";
import {Calendar} from "@components/Calendar/Calendar";

export const MainPage = () => {
    return (
        <div className="main_page">
            <Header />
            <div className="main">
                <NotesPanel />
                <div className="main__container">
                    <div className="main_page_content">
                        <Calendar />
                    </div>
                </div>
                <RightPanel />
                <NewGoal />
                <NewTask />
            </div>
        </div>
    );
};
