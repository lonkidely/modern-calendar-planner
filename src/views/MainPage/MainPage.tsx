import React, {useEffect} from 'react';
import './MainPage.scss';
import { Header } from '@components/Header/Header';
import {NotesPanel} from "@components/NotesPanel/NotesPanel";
import {RightPanel} from "@components/RightPanel/RightPanel";
import {NewGoal} from "@components/NewGoal/NewGoal";
import {NewTask} from "@components/NewTask/NewTask";
import {Calendar} from "@components/Calendar/Calendar";
import {useActions} from "@hooks/useActions";
import {useTypedSelector} from "@hooks/useTypedSelector";

export const MainPage = () => {
    const {user} = useTypedSelector(state => state.user);
    const {authUser} = useActions();

    useEffect(() => {
        authUser();
    }, []);

    return (
        <div className="main_page">
            <Header />
            <div className="main">
                {user !== null && <NotesPanel />}
                <div className="main__container">
                    <div className="main_page_content">
                        <Calendar />
                    </div>
                </div>
                {user !== null && <RightPanel />}
                {user !== null && <NewGoal />}
                {user !== null && <NewTask />}
            </div>
        </div>
    );
};
