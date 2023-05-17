import React from 'react';
import './RightPanel.scss';

export const RightPanel:React.FC<unknown> = () => {
    return (
        <div className="right_panel right_panel_hidden">
            <div className="right_panel__buttons">
                <div className="right_panel__buttons__btn">Создать цель</div>
                <div className="right_panel__buttons__btn">Создать задачу</div>
            </div>
        </div>
    );
};
