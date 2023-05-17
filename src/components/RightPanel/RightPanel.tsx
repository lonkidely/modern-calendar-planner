import React from 'react';
import './RightPanel.scss';

export const RightPanel:React.FC<unknown> = () => {
    const openNewGoalPanel = () => {
        document.getElementsByClassName('new_goal_panel')[0].classList.remove('new_goal_panel_hidden');
    };
    return (
        <div className="right_panel right_panel_hidden">
            <div className="right_panel__buttons">
                <div className="right_panel__buttons__btn" onClick={openNewGoalPanel}>Создать цель</div>
                <div className="right_panel__buttons__btn">Создать задачу</div>
            </div>
        </div>
    );
};
