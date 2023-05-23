import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {LinkedTasks} from "@components/LinkedTask/LinkedTasks";
import {useTypedSelector} from "@hooks/useTypedSelector";
import {TaskProps} from "@custom_types/TaskProps";
import {Goal} from "@custom_types/Goal";
import {User} from "@custom_types/User";
import {Task} from "@custom_types/Task";
import {useActions} from "@hooks/useActions";
import './EditTaskPanel.scss';


export const EditTaskPanel = ({task}) => {
    const {getTasks, editTask, getGoals, deleteTask, showSuccess, showWarning} = useActions();
    const {goals} = useTypedSelector(state => state.goals);
    const {tasks, loading} = useTypedSelector(state => state.tasks);
    const {user} = useTypedSelector(state => state.user);

    const [taskFrom, setTaskFrom] = useState(null);
    const [taskTo, setTaskTo] = useState(null);

    useEffect(() => {
        getGoals();
    }, []);


    const closeEditTaskPanel = () => {
        document.getElementsByClassName('edit_task_panel')[0].classList.add('edit_task_panel_hidden');
    };

    const [taskList, setTaskList] = useState(tasks.map(task => {
        const newTaskProp: TaskProps = {task: task, used: false};
        return newTaskProp;
    }).filter(t => t.task.id !== task?.id));

    useEffect(() => {
        if (!task) {
            return;
        }
        setTaskList(tasks.map(task => {
            const newTaskProp: TaskProps = {task: task, used: false};
            return newTaskProp;
        }).filter(t => t.task.id !== task.id));
    }, [task]);


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

    const editTaskFunc = (event) => {
        event.preventDefault();

        const target = (document.getElementById('edit_task_target') as HTMLSelectElement).value;
        const email = (document.getElementById('edit_task_email') as HTMLInputElement).value;
        const beginDate = new Date((document.getElementById('edit_task_beginDate') as HTMLInputElement).value);
        const endDate = new Date((document.getElementById('edit_task_endDate') as HTMLInputElement).value);
        const title = (document.getElementById('edit_task_title') as HTMLInputElement).value;
        const description = (document.getElementById('edit_task_description') as HTMLInputElement).value;
        const priority = Number((document.getElementById('edit_task_priority') as HTMLInputElement).value);
        const isCompleted = Number((document.getElementById('edit_task_status') as HTMLSelectElement).value);

        const linkedGoal:Goal = {id:target.length === 1 ? task.mainTarget.id : target};
        const performer:User = {email:email};
        const newTask: Task = {
            id:task.id,
            mainTarget: linkedGoal,
            performer: performer,
            title: title,
            startDate: beginDate,
            endDate: endDate,
            priority: priority,
            description: description,
            isCompleted: isCompleted !== 0,
            toTask:taskTo?.id.length > 1 ? taskTo : null,
            fromTask:taskFrom?.id.length > 1 ? taskFrom : null
        };

        if (
            newTask?.mainTarget?.id === task?.mainTarget?.id &&
            newTask?.performer?.email === task?.performer?.email &&
            newTask.title === task.title &&
            newTask.startDate.getTime() === task.startDate.getTime() &&
            newTask.endDate.getTime() === task.endDate.getTime() &&
            newTask.priority === task.priority &&
            newTask.isCompleted === task.isCompleted &&
            newTask.description === task.description &&
            newTask?.toTask?.id === task?.toTask?.id &&
            newTask?.fromTask?.id === task?.fromTask?.id
        ) {
            showWarning();
            return;
        }

        showSuccess();
        editTask(newTask);
        getTasks();
        closeEditTaskPanel();
    };

    const deleteTaskFunc = (event) => {
        event.preventDefault();
        if (task.createdBy.id !== user.id) {
            showWarning();
            return;
        }
        showSuccess();
        deleteTask(task);
        closeEditTaskPanel();
    };

    useEffect(() => {
        setTaskList(tasks.map(task => {
            const newTaskProp: TaskProps = {task: task, used: false};
            return newTaskProp;
        }));
    }, [tasks]);
    
    return (
        <div className="edit_task_panel edit_task_panel_hidden">
            <Form.Group className="edit_task_linked_goal" hidden={user?.email === task?.performer?.email && user?.email !== task?.createdBy.email}>
                <Form.Label>Цель</Form.Label>
                <Form.Select id="edit_task_target">
                    {goals.map((goal, idx) => {
                        return <option key={idx} value={goal.id} selected={goal.id === task?.mainTarget?.id}>{goal.title}</option>;
                    })}
                </Form.Select>
            </Form.Group>

            <Form.Group className="edit_goal_linked_user">
                <Form.Label>Исполнитель (email)</Form.Label>
                <Form.Control id="edit_task_email" type="text" defaultValue={task?.performer?.email} />
            </Form.Group>

            <Form.Group className="edit_task_start_date">
                <Form.Label>Дата начала</Form.Label>
                <Form.Control id="edit_task_beginDate" type={'datetime-local'} defaultValue={task?.startDate ? formatDate(task.startDate) : ''} />
            </Form.Group>

            <Form.Group className="edit_task_end_date">
                <Form.Label>Дата окончания</Form.Label>
                <Form.Control id="edit_task_endDate" type={'datetime-local'} defaultValue={task?.endDate ? formatDate(task.endDate) : ''} />
            </Form.Group>

            <Form.Group className="edit_task_title">
                <Form.Label>Название задачи</Form.Label>
                <Form.Control id="edit_task_title" type="text" defaultValue={task?.title} />
            </Form.Group>

            <Form.Group className="edit_task_description">
                <Form.Label>Описание задачи</Form.Label>
                <Form.Control id="edit_task_description" as="textarea" rows={4} defaultValue={task?.description} />
            </Form.Group>

            <Form.Group className="edit_task_priority">
                <Form.Label>Приоритет</Form.Label>
                <Form.Control id="edit_task_priority" type="text" defaultValue={task?.priority} />
            </Form.Group>

            <Form.Group className="edit_task_status">
                <Form.Label>Состояние</Form.Label>
                <Form.Select id="edit_task_status">
                    <option value="1" selected={task?.isCompleted}>Выполнена</option>
                    <option value="0" selected={task?.isCompleted === false}>Не выполнена</option>
                </Form.Select>
            </Form.Group>

            {!loading && tasks.length > 1 && <LinkedTasks defaultTask={task?.fromTask} setTask={setTaskFrom} type={"before"} tasks={taskList} update={usingTask} />}

            {!loading && tasks.length > 2 && <LinkedTasks defaultTask={task?.toTask} setTask={setTaskTo} type={"after"} tasks={taskList} update={usingTask} />}

            <Button variant="primary" className="edit_task_create_task_btn" onClick={editTaskFunc}>Изменить задачу</Button>
            <Button variant="danger" className="edit_task_close_panel_btn" onClick={deleteTaskFunc}>Удалить задачу</Button>
            <Button variant="secondary" className="edit_task_close_panel_btn" onClick={closeEditTaskPanel}>Отменить изменение</Button>
        </div>
    );
};
