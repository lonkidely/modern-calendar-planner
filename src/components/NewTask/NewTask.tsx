import React, {useEffect, useState} from 'react';
import './NewTask.scss';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import {LinkedTasks} from "@components/LinkedTask/LinkedTasks";
import {useActions} from "@hooks/useActions";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {TaskProps} from "@custom_types/TaskProps";
import {Task} from "@custom_types/Task";
import {Goal} from "@custom_types/Goal";
import {User} from "@custom_types/User";

export const NewTask:React.FC<unknown> = () => {
    const {createTask, showSuccess} = useActions();
    const {goals} = useTypedSelector(state => state.goals);
    const {tasks, loading} = useTypedSelector(state => state.tasks);

    const [taskFrom, setTaskFrom] = useState(null);
    const [taskTo, setTaskTo] = useState(null);

    const closeNewTaskPanel = () => {
        document.getElementsByClassName('new_task_panel')[0].classList.add('new_task_panel_hidden');
    };

    const [taskList, setTaskList] = useState(tasks.map(task => {
        const newTaskProp: TaskProps = {task: task, used: false};
        return newTaskProp;
    }));

    const padTo2Digits = (num:number) => {
        return num.toString().padStart(2, '0');
    };

    const formatDate = (date:Date)=> {
        return ''.concat([
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-'), ' ', [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':'));
    };

    const usingTask = (taskBefore, taskAfter:string) => {
        setTaskList(tasks => tasks.map(el => {
            if (el.task.title === taskBefore) {
                return {task: el.task, used:false};
            }
            return el;
        }));
        setTaskList(tasks => tasks.map(el => {
            if (el.task.title === taskAfter) {
                return {task: el.task, used:true};
            }
            return el;
        }));
    };

    const createNewTask = (event) => {
        event.preventDefault();

        const target = (document.getElementById('new_task_target') as HTMLSelectElement).value;
        const email = (document.getElementById('new_task_email') as HTMLInputElement).value;
        const beginDate = new Date((document.getElementById('new_task_beginDate') as HTMLInputElement).value);
        const endDate = new Date((document.getElementById('new_task_endDate') as HTMLInputElement).value);
        const title = (document.getElementById('new_task_title') as HTMLInputElement).value;
        const description = (document.getElementById('new_task_description') as HTMLInputElement).value;
        const priority = Number((document.getElementById('new_task_priority') as HTMLInputElement).value);

        const linkedGoal:Goal = {id:target};
        const performer:User = {email:email};
        const newTask: Task = {
            mainTarget: target !== '' ? linkedGoal : null,
            performer: performer,
            title: title,
            startDate: beginDate,
            endDate: endDate,
            priority: priority,
            description: description,
            toTask:taskTo?.id.length > 1 ? taskTo : null,
            fromTask:taskFrom?.id.length > 1 ? taskFrom : null
        };

        showSuccess();
        createTask(newTask);

        (document.getElementById('new_task_email') as HTMLInputElement).value = '';
        (document.getElementById('new_task_beginDate') as HTMLInputElement).value = formatDate(new Date());
        (document.getElementById('new_task_endDate') as HTMLInputElement).value = formatDate(new Date());
        (document.getElementById('new_task_title') as HTMLInputElement).value = '';
        (document.getElementById('new_task_description') as HTMLInputElement).value = '';
        (document.getElementById('new_task_priority') as HTMLInputElement).value = '';
    };

    useEffect(() => {
        setTaskList(tasks.map(task => {
            const newTaskProp: TaskProps = {task: task, used: false};
            return newTaskProp;
        }));
    }, [tasks]);

    return (
        <div className="new_task_panel new_task_panel_hidden">
            <Form.Group className="new_task_linked_goal">
                <Form.Label>Цель</Form.Label>
                <Form.Select id="new_task_target">
                    {goals.map((goal, idx) => {
                        return <option key={idx} value={goal.id}>{goal.title}</option>;
                    })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="new_goal_linked_user">
                <Form.Label>Исполнитель (email)</Form.Label>
                <Form.Control id="new_task_email" type="text" placeholder="Введите email исполнителя" />
            </Form.Group>

            <Form.Group className="new_task_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control id="new_task_beginDate" type={'datetime-local'} defaultValue={formatDate(new Date())} />
            </Form.Group>

            <Form.Group className="new_task_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control id="new_task_endDate" type={'datetime-local'} defaultValue={formatDate(new Date())} />
            </Form.Group>

            <Form.Group className="new_task_title">
                <Form.Label>Название задачи</Form.Label>
                <Form.Control id="new_task_title" type="text" placeholder="Введите название задачи" />
            </Form.Group>

            <Form.Group className="new_task_description">
                <Form.Label>Описание задачи</Form.Label>
                <Form.Control id="new_task_description" as="textarea" rows={4} placeholder="Введите описание задачи" />
            </Form.Group>

            <Form.Group className="new_task_priority">
                <Form.Label>Приоритет</Form.Label>
                <Form.Control id="new_task_priority" type="text" placeholder="Введите численный приоритет" />
            </Form.Group>

            {!loading && tasks.length > 0 && <LinkedTasks setTask={setTaskFrom} type={"before"} tasks={taskList} update={usingTask} />}

            {!loading && tasks.length > 1 && <LinkedTasks setTask={setTaskTo} type={"after"} tasks={taskList} update={usingTask} />}

            <Button variant="primary" className="new_task_create_task_btn" onClick={createNewTask}>Создать задачу</Button>

            <Button variant="secondary" className="new_task_close_panel_btn" onClick={closeNewTaskPanel}>Отменить создание</Button>
        </div>
    );
};
