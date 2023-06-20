import {TasksAction, TasksActionsType} from '../types/tasks';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Task} from '@custom_types/Task';
import {CREATE_TASK_URL, DELETE_TASK_URL, EDIT_TASK_URL, GET_TASKS_URL} from '@config/config';

export const createTask = (task:Task) => {
    return async (dispatch: Dispatch<TasksAction>)=> {
        try {
            dispatch({
                type: TasksActionsType.CREATE_TASK,
            });

            const response = await axios.post(
                CREATE_TASK_URL,
                task,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);

            const payload: Task = {
                id: response['id'],
                mainTarget: response['mainTarget'],
                title: response['title'],
                description: response['description'],
                startDate: new Date(response['startDate']),
                endDate: new Date(response['endDate']),
                performer: response['performer'],
                createdBy: response['createdBy'],
                fromTask: response['fromTask'],
                toTask: response['toTask'],
                isCompleted: response['isCompleted'],
                priority: response['priority'],
                cost: response['cost'],
            };
            dispatch(
                {
                    type: TasksActionsType.CREATE_TASK_SUCCESS,
                    payload: payload,
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: TasksActionsType.CREATE_TASK_ERROR,
                    payload: 'При создании задачи возникла ошибка',
                }
            );
        }
    };
};

export const getTasks = () => {
    return async (dispatch: Dispatch<TasksAction>)=> {
        try {
            dispatch({
                type: TasksActionsType.GET_TASKS,
            });

            const response = await axios.get(
                GET_TASKS_URL,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);

            const payload: Task[] = response.map(task => {
                const newTask:Task = {
                    id: task['id'],
                    mainTarget: task['mainTarget'],
                    title: task['title'],
                    description: task['description'],
                    startDate: new Date(task['startDate']),
                    endDate: new Date(task['endDate']),
                    performer: task['performer'],
                    createdBy: task['createdBy'],
                    fromTask: task['fromTask'],
                    toTask: task['toTask'],
                    isCompleted: task['isCompleted'],
                    priority: task['priority'],
                    cost: task['cost'],
                };
                return newTask;
            });

            dispatch(
                {
                    type: TasksActionsType.GET_TASKS_SUCCESS,
                    payload: payload,
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: TasksActionsType.GET_TASKS_ERROR,
                    payload: 'При получении задач возникла ошибка',
                }
            );
        }
    };
};

export const editTask = (task:Task) => {
    return async (dispatch: Dispatch<TasksAction>)=> {
        try {
            dispatch({
                type: TasksActionsType.EDIT_TASK,
            });

            const response = await axios.post(
                EDIT_TASK_URL,
                task,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);

            const payload: Task = {
                id: response['id'],
                mainTarget: response['mainTarget'],
                title: response['title'],
                description: response['description'],
                startDate: new Date(response['startDate']),
                endDate: new Date(response['endDate']),
                performer: response['performer'],
                createdBy: response['createdBy'],
                fromTask: response['fromTask'],
                toTask: response['toTask'],
                isCompleted: response['isCompleted'],
                priority: response['priority'],
                cost: response['cost'],
            };
            dispatch(
                {
                    type: TasksActionsType.EDIT_TASK_SUCCESS,
                    payload: payload,
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: TasksActionsType.EDIT_TASK_ERROR,
                    payload: 'При изменении задачи возникла ошибка',
                }
            );
        }
    };
};

export const deleteTask = (task:Task) => {
    return async (dispatch: Dispatch<TasksAction>)=> {
        try {
            dispatch({
                type: TasksActionsType.DELETE_TASK,
            });

            await axios.post(
                DELETE_TASK_URL,
                task,
                {
                    withCredentials: true,
                }
            );

            dispatch(
                {
                    type: TasksActionsType.DELETE_TASK_SUCCESS,
                    payload: task,
                }
            );
        } catch (e) {
            dispatch(
                {
                    type: TasksActionsType.DELETE_TASK_ERROR,
                    payload: 'При удалении задачи возникла ошибка',
                }
            );
        }
    };
};
