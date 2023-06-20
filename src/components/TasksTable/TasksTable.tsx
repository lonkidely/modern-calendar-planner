import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';
import './TasksTable.scss';

export const TasksTable = ({selTask}) => {
    const {user} = useTypedSelector(state => state.user);
    const {tasks} = useTypedSelector(state => state.tasks);

    const {authUser, getTasks} = useActions();

    useEffect(() => {
        authUser();
        if (user) {
            getTasks();
        }
    }, []);

    const openEditTaskPanel = (event) => {
        event.preventDefault();

        selTask(tasks.filter(task => task.id === event.target.id)[0]);

        document.getElementsByClassName('edit_task_panel')[0].classList.remove('edit_task_panel_hidden');
    };

    return (
        user
            ?
            <div className="goals_table">
                <Table bordered hover>
                    <thead className="TableHead">
                        <tr>
                            <th>Цель</th>
                            <th>Название</th>
                            <th>Описание</th>
                            <th>Дата начала</th>
                            <th>Дата окончания</th>
                            <th>Состояние</th>
                            <th>Исполнитель</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, key) => {
                                const beginYear = task.startDate.getFullYear();
                                const beginMonth = task.startDate.getMonth() + 1;
                                const beginDay = task.startDate.getDate();
                                const beginHour = task.startDate.getHours();
                                const beginMinutes = task.startDate.getMinutes();
                                const endYear = task.endDate.getFullYear();
                                const endMonth = task.endDate.getMonth() + 1;
                                const endDay = task.endDate.getDate();
                                const endHour = task.endDate.getHours();
                                const endMinutes = task.endDate.getMinutes();
                                const goal = task.mainTarget.title;
                                const performer = task.performer.email;
                                return <tr key={key}>
                                    <td>{goal}</td>
                                    <td><a id={task.id} href='#' onClick={openEditTaskPanel}>{task.title}</a></td>
                                    <td>{task.description}</td>
                                    <td>{beginHour < 10 ? `0${beginHour}` : beginHour}:{beginMinutes < 10 ? `0${beginMinutes}` : beginMinutes} {beginDay < 10 ? `0${beginDay}` : beginDay}.{beginMonth < 10 ? `0${beginMonth}` : beginMonth}.{beginYear}
                                    </td>
                                    <td>{endHour < 10 ? `0${endHour}` : endHour}:{endMinutes < 10 ? `0${endMinutes}` : endMinutes} {endDay < 10 ? `0${endDay}` : endDay}.{endMonth < 10 ? `0${endMonth}` : endMonth}.{endYear}</td>
                                    <td>{task.isCompleted ? 'Выполнена' : 'Не выполнена'}</td>
                                    <td>{performer}</td>
                                </tr>;
                            })
                        }
                    </tbody>
                </Table>
            </div>
            :
            <div></div>
    );
};
