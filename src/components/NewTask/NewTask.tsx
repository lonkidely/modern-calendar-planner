import React, {useState} from 'react';
import './NewTask.scss';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';

export const NewTask:React.FC<unknown> = () => {
    const closeNewTaskPanel = () => {
        document.getElementsByClassName('new_task_panel')[0].classList.add('new_task_panel_hidden');
    };

    const [beginDateType, setBeginDateType] = useState('text');
    const [endDateType, setEndDateType] = useState('text');

    return (
        <div className="new_task_panel new_task_panel_hidden">
            <Form.Group className="new_task_linked_goal">
                <Form.Label>Цель</Form.Label>
                <Form.Select>
                    <option>Задача не привязана к целям</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="new_goal_linked_user">
                <Form.Label>Исполнитель (email)</Form.Label>
                <Form.Control type="text" placeholder="Введите email исполнителя" />
            </Form.Group>

            <Form.Group className="new_task_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control type={beginDateType} placeholder="Дата и время начала" onFocus={() => setBeginDateType('datetime-local')} />
            </Form.Group>

            <Form.Group className="new_task_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control type={endDateType} placeholder="Дата и время окончания" onFocus={() => setEndDateType('datetime-local')}/>
            </Form.Group>

            <Form.Group className="new_task_title">
                <Form.Label>Название задачи</Form.Label>
                <Form.Control type="text" placeholder="Введите название задачи" />
            </Form.Group>

            <Form.Group className="new_task_description">
                <Form.Label>Описание задачи</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Введите описание задачи" />
            </Form.Group>

            <Form.Group className="new_task_priority">
                <Form.Label>Приоритет</Form.Label>
                <Form.Control type="text" placeholder="Введите численный приоритет" />
            </Form.Group>

            <Button variant="primary" className="new_task_create_task_btn">Создать задачу</Button>

            <Button variant="secondary" className="new_task_close_panel_btn" onClick={closeNewTaskPanel}>Отменить создание</Button>
        </div>
    );
};
