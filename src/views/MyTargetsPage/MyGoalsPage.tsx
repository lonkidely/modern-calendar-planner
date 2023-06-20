import { Header } from '@components/Header/Header';
import { GoalsTable } from '@components/GoalsTable/GoalsTable';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import React, {useEffect, useState} from 'react';
import './MyGoalsPage.scss';
import {RightPanel} from '@components/RightPanel/RightPanel';
import {NewGoal} from '@components/NewGoal/NewGoal';
import {NewTask} from '@components/NewTask/NewTask';
import {NotesPanel} from '@components/NotesPanel/NotesPanel';
import {EditGoalPanel} from '@components/EditGoalPanel/EditGoalPanel';
import {ToastInfo} from '@components/ToastInfo/ToastInfo';
import {ToastWarning} from '@components/ToastWarning/ToastWarning';
import {ToastSuccess} from '@components/ToastSuccess/ToastSuccess';

export const MyGoalsPage = () => {
    const { user } = useTypedSelector((state) => state.user);
    const { authUser } = useActions();
    const [selectedGoal, setSelectedGoal] = useState(null);

    useEffect(() => {
        authUser();
    }, []);

    return (
        <div className="target_page">
            <Header />
            {user && <NotesPanel />}
            {user && (
                <div className="main__container">
                    <div className="page_content">
                        <GoalsTable selGoal={setSelectedGoal} />
                        <EditGoalPanel goal={selectedGoal} />
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
