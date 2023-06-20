import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {useActions} from '@hooks/useActions';
import {Goal} from '@custom_types/Goal';
import './EditGoalPanel.scss';


export const EditGoalPanel = ({goal}) => {
    const {changeGoal, deleteGoal, showSuccess, showWarning} = useActions();
    const closeEditGoalPanel = () => {
        document.getElementsByClassName('edit_goal_panel')[0].classList.add('edit_goal_panel_hidden');
    };

    const changeGoalFunc = (event) => {
        event.preventDefault();

        const beginDate = new Date((document.getElementById('edit_goal_beginDate') as HTMLInputElement).value);
        const endDate = new Date((document.getElementById('edit_goal_endDate') as HTMLInputElement).value);
        const title = (document.getElementById('edit_goal_title') as HTMLInputElement).value;
        const important = Number((document.getElementById('edit_goal_important') as HTMLSelectElement).value);
        const urgency = Number((document.getElementById('edit_goal_urgency') as HTMLSelectElement).value);

        const newGoal: Goal = {
            id:goal.id,
            title:title,
            startDate:beginDate,
            endDate:endDate,
            important:important,
            urgency:urgency
        };

        if (
            newGoal.title === goal.title &&
            newGoal.startDate.getTime() === goal.startDate.getTime() &&
            newGoal.endDate.getTime() === goal.endDate.getTime() &&
            newGoal.important === goal.important &&
            newGoal.urgency === goal.urgency
        ) {
            showWarning();
            return;
        }

        showSuccess();
        changeGoal(newGoal);
        closeEditGoalPanel();
    };

    const deleteGoalFunc = (event) => {
        event.preventDefault();

        showSuccess();
        deleteGoal(goal);

        closeEditGoalPanel();
    };

    const padTo2Digits = (num:number) => {
        return num.toString().padStart(2, '0');
    };

    const formatDate = (date:Date)=> {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-');
    };

    return (
        <div className="edit_goal_panel edit_goal_panel_hidden">
            <Form.Group className="edit_goal_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control id="edit_goal_beginDate" type={'date'} defaultValue={goal?.startDate ? formatDate(goal.startDate) : ''} />
            </Form.Group>
            <Form.Group className="edit_goal_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control id="edit_goal_endDate" type={'date'} defaultValue={goal?.endDate ? formatDate(goal.endDate) : ''} />
            </Form.Group>
            <Form.Group className="edit_goal_title">
                <Form.Label>Название цели</Form.Label>
                <Form.Control id="edit_goal_title" type="text" defaultValue={goal?.title} />
            </Form.Group>
            <Form.Group className="edit_goal_importance">
                <Form.Label>Важность</Form.Label>
                <Form.Select id="edit_goal_important">
                    <option value="1" selected={goal?.important === 1}>Неважная </option>
                    <option value="0" selected={goal?.important === 0}>Важная</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="edit_goal_urgency">
                <Form.Label>Срочность</Form.Label>
                <Form.Select id="edit_goal_urgency">
                    <option value="1" selected={goal?.urgency === 1}>Несрочная</option>
                    <option value="0" selected={goal?.urgency === 0}>Срочная</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" className="edit_goal_create_goal_btn" onClick={changeGoalFunc}>Изменить цель</Button>
            <Button variant="danger" className="edit_goal_close_panel_btn" onClick={deleteGoalFunc}>Удалить цель</Button>
            <Button variant="secondary" className="edit_goal_close_panel_btn" onClick={closeEditGoalPanel}>Отменить изменение</Button>
        </div>
    );
};
