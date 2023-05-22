import React, {useState} from 'react';
import './NewGoal.scss';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import {Goal} from "@custom_types/Goal";
import {useActions} from "@hooks/useActions";

export const NewGoal:React.FC<unknown> = () => {
    const {createGoal, showSuccess} = useActions();
    const closeNewGoalPanel = () => {
        document.getElementsByClassName('new_goal_panel')[0].classList.add('new_goal_panel_hidden');
    };

    const [beginDateType, setBeginDateType] = useState('text');
    const [endDateType, setEndDateType] = useState('text');

    const createNewGoal = (event) => {
        event.preventDefault();

        const beginDate = new Date((document.getElementById('new_goal_beginDate') as HTMLInputElement).value);
        const endDate = new Date((document.getElementById('new_goal_endDate') as HTMLInputElement).value);
        const title = (document.getElementById('new_goal_title') as HTMLInputElement).value;
        const important = Number((document.getElementById('new_goal_important') as HTMLSelectElement).value);
        const urgency = Number((document.getElementById('new_goal_urgency') as HTMLSelectElement).value);

        const newGoal: Goal = {
            title:title,
            startDate:beginDate,
            endDate:endDate,
            important:important,
            urgency:urgency
        };

        showSuccess();
        createGoal(newGoal);

        (document.getElementById('new_goal_beginDate') as HTMLInputElement).value = '';
        (document.getElementById('new_goal_endDate') as HTMLInputElement).value = '';
        (document.getElementById('new_goal_title') as HTMLInputElement).value = '';
        (document.getElementById('new_goal_important') as HTMLSelectElement).value = "1";
        (document.getElementById('new_goal_urgency') as HTMLSelectElement).value = "1";
    };

    return (
        <div className="new_goal_panel new_goal_panel_hidden">
            <Form.Group className="new_goal_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control id="new_goal_beginDate" type={beginDateType} placeholder="Выберите дату начала" onFocus={() => setBeginDateType('date')} />
            </Form.Group>
            <Form.Group className="new_goal_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control id="new_goal_endDate" type={endDateType} placeholder="Выберите дату окончания" onFocus={() => setEndDateType('date')} />
            </Form.Group>
            <Form.Group className="new_goal_title">
                <Form.Label>Название цели</Form.Label>
                <Form.Control id="new_goal_title" type="text" placeholder="Введите название цели" />
            </Form.Group>
            <Form.Group className="new_goal_importance">
                <Form.Label>Важность</Form.Label>
                <Form.Select id="new_goal_important">
                    <option value="1">Неважная </option>
                    <option value="0">Важная</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="new_goal_urgency">
                <Form.Label>Срочность</Form.Label>
                <Form.Select id="new_goal_urgency">
                    <option value="1">Несрочная</option>
                    <option value="0">Срочная</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" className="new_goal_create_goal_btn" onClick={createNewGoal}>Создать цель</Button>
            <Button variant="secondary" className="new_goal_close_panel_btn" onClick={closeNewGoalPanel}>Отменить создание</Button>
        </div>
    );
};
