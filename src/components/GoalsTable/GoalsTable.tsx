import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';
import './GoalsTable.scss';

export const GoalsTable = ({selGoal}) => {
    const {user} = useTypedSelector(state => state.user);
    const {goals} = useTypedSelector(state => state.goals);

    const {authUser, getGoals} = useActions();

    useEffect(() => {
        authUser();
        if (user) {
            getGoals();
        }
    }, []);

    const selectTarget = (event) => {
        event.preventDefault();

        selGoal(goals.filter(el => el.id === event.target.id)[0]);

        document.getElementsByClassName('edit_goal_panel')[0].classList.remove('edit_goal_panel_hidden');
    };

    return (
        user
            ?
            <div className="goals_table">
                <Table bordered hover>
                    <thead className="TableHead">
                        <tr>
                            <th>Название</th>
                            <th>Важность</th>
                            <th>Срочность</th>
                            <th>Дата начала</th>
                            <th>Дата окончания</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            goals.map((goal, key) => {
                                const beginYear = goal.startDate.getFullYear();
                                const beginMonth = goal.startDate.getMonth() + 1;
                                const beginDay = goal.startDate.getDate();
                                const endYear = goal.endDate.getFullYear();
                                const endMonth = goal.endDate.getMonth() + 1;
                                const endDay = goal.endDate.getDate();
                            
                                return <tr key={key}>
                                    <td><a id={goal.id} href='#' onClick={selectTarget}>{goal.title}</a></td>
                                    <td>{goal.important === 0 ? 'Важная' : 'Неважная'}</td>
                                    <td>{goal.urgency === 0 ? 'Срочная' : 'Несрочная'}</td>
                                    <td>{beginDay < 10 ? `0${beginDay}` : beginDay}.{beginMonth < 10 ? `0${beginMonth}` : beginMonth}.{beginYear}</td>
                                    <td>{endDay < 10 ? `0${endDay}` : endDay}.{endMonth < 10 ? `0${endMonth}` : endMonth}.{endYear}</td>
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
