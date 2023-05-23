import { Header } from '@components/Header/Header';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import React, {useEffect, useState} from 'react';
import './MyTasksPage.scss';
import {TasksTable} from "@components/TasksTable/TasksTable";
import {RightPanel} from "@components/RightPanel/RightPanel";
import {NewGoal} from "@components/NewGoal/NewGoal";
import {NewTask} from "@components/NewTask/NewTask";
import {NotesPanel} from "@components/NotesPanel/NotesPanel";
import {ToastInfo} from "@components/ToastInfo/ToastInfo";
import {ToastWarning} from "@components/ToastWarning/ToastWarning";
import {ToastSuccess} from "@components/ToastSuccess/ToastSuccess";
import {EditTaskPanel} from "@components/EditTaskPanel/EditTaskPanel";

export const MyTasksPage = () => {
    const {user} = useTypedSelector(state => state.user);
    const {authUser} = useActions();
    const [selectedTask, setSelectedTask] = useState(null);

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
                        <TasksTable selTask={setSelectedTask} />
                        <EditTaskPanel task={selectedTask} />
                    </div>
                </div>
            )}
            {user && <RightPanel />}
            {user && <NewGoal />}
            {user && <NewTask />}
            <ToastInfo />
            <ToastWarning />
            <ToastSuccess />
        </div>
    );
};
