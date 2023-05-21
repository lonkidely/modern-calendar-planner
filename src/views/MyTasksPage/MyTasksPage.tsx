import { Header } from '@components/Header/Header';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import React, { useEffect } from 'react';
import './MyTasksPage.scss';
import {TasksTable} from "@components/TasksTable/TasksTable";
import {RightPanel} from "@components/RightPanel/RightPanel";
import {NewGoal} from "@components/NewGoal/NewGoal";
import {NewTask} from "@components/NewTask/NewTask";
import {NotesPanel} from "@components/NotesPanel/NotesPanel";

export const MyTasksPage = () => {
    const {user} = useTypedSelector(state => state.user);
    const {authUser} = useActions();

    useEffect(() => {
        authUser();
    }, []);

    return (
        <div className="task_page">
            <Header />
            {user && <NotesPanel />}
            {user && (
                <div className="main__container">
                    <div className="page_content">
                        <TasksTable />
                    </div>
                </div>
            )}
            {user && <RightPanel />}
            {user && <NewGoal />}
            {user && <NewTask />}
        </div>
    );
};
