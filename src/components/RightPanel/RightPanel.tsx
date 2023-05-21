import React from 'react';
import './RightPanel.scss';
import {useActions} from "@hooks/useActions";

export const RightPanel:React.FC<unknown> = () => {
    const {getGoals, getTasks} = useActions();
    const openNewGoalPanel = () => {
        document.getElementsByClassName('new_goal_panel')[0].classList.remove('new_goal_panel_hidden');
    };
    const openNewTaskPanel = () => {
        getGoals();
        getTasks();
        document.getElementsByClassName('new_task_panel')[0].classList.remove('new_task_panel_hidden');
    };
    return (
        <div className="right_panel right_panel_hidden">
            <div className="right_panel__buttons">
                <div className="right_panel__buttons__btn" onClick={openNewGoalPanel}>Создать цель</div>
                <div className="right_panel__buttons__btn" onClick={openNewTaskPanel}>Создать задачу</div>
            </div>
        </div>
    );
};
