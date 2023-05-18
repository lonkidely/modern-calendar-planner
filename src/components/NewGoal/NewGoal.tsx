import React, {useState} from 'react';
import './NewGoal.scss';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

export const NewGoal:React.FC<unknown> = () => {
    const closeNewGoalPanel = () => {
        document.getElementsByClassName('new_goal_panel')[0].classList.add('new_goal_panel_hidden');
    };

    const [beginDateType, setBeginDateType] = useState('text');
    const [endDateType, setEndDateType] = useState('text');

    return (
        <div className="new_goal_panel new_goal_panel_hidden">
            <Form.Group className="new_goal_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control type={beginDateType} placeholder="Выберите дату начала" onFocus={() => setBeginDateType('date')} />
            </Form.Group>
            <Form.Group className="new_goal_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control type={endDateType} placeholder="Выберите дату окончания" onFocus={() => setEndDateType('date')} />
            </Form.Group>
            <Form.Group className="new_goal_title">
                <Form.Label>Название цели</Form.Label>
                <Form.Control type="text" placeholder="Введите название цели" />
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
