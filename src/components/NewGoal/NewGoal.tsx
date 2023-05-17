import React from 'react';
import './NewGoal.scss';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

export const NewGoal:React.FC<unknown> = () => {
    const closeNewGoalPanel = () => {
        document.getElementsByClassName('new_goal_panel')[0].classList.add('new_goal_panel_hidden');
    };

    return (
        <div className="new_goal_panel new_goal_panel_hidden">
            <Form.Group className="new_goal_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control type="date" required pattern="\d{2}.\d{2}-\d{4}" />
            </Form.Group>
            <Form.Group className="new_goal_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control type="date" required pattern="\d{2}.\d{2}-\d{4}" />
            </Form.Group>
            <Form.Group className="new_goal_title">
                <Form.Label>Название цели</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="new_goal_importance">
                <Form.Label>Важность</Form.Label>
                <Form.Select>
                    <option>Неважная</option>
                    <option>Важная</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="new_goal_urgency">
                <Form.Label>Срочность</Form.Label>
                <Form.Select>
                    <option>Несрочная</option>
                    <option>Срочная</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" className="new_goal_create_goal_btn">Создать цель</Button>
            <Button variant="secondary" className="new_goal_close_panel_btn" onClick={closeNewGoalPanel}>Отменить создание</Button>
        </div>
    );
};
