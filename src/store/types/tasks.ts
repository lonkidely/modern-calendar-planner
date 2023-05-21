import {Task} from '@custom_types/Task';

export interface TasksState {
    tasks: Task[];
    loading: boolean;
    error: null | string;
}

export enum TasksActionsType {
    CREATE_TASK = 'CREATE_TASK',
    CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS',
    CREATE_TASK_ERROR = 'CREATE_TASK_ERROR',

    GET_TASKS = 'GET_TASKS',
    GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS',
    GET_TASKS_ERROR = 'GET_TASKS_ERROR',

    EDIT_TASK = 'EDIT_TASK',
    EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS',
    EDIT_TASK_ERROR = 'EDIT_TASK_ERROR',

    DELETE_TASK = 'DELETE_TASK',
    DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
    DELETE_TASK_ERROR = 'DELETE_TASK_ERROR',
}

interface CreateTaskAction {
    type: TasksActionsType.CREATE_TASK;
}

interface CreateTaskSuccessAction {
    type: TasksActionsType.CREATE_TASK_SUCCESS;
    payload: Task;
}

interface CreateTaskErrorAction {
    type: TasksActionsType.CREATE_TASK_ERROR;
    payload: string;
}

interface GetTasksAction {
    type:TasksActionsType.GET_TASKS;
}

interface GetTasksSuccessAction {
    type:TasksActionsType.GET_TASKS_SUCCESS;
    payload: Task[];
}

interface GetTasksErrorAction {
    type:TasksActionsType.GET_TASKS_ERROR;
    payload:string;
}

interface EditTaskAction {
    type:TasksActionsType.EDIT_TASK;
}

interface EditTaskSuccessAction {
    type:TasksActionsType.EDIT_TASK_SUCCESS;
    payload: Task;
}

interface EditTaskErrorAction {
    type:TasksActionsType.EDIT_TASK_ERROR;
    payload: string;
}

interface DeleteTaskAction {
    type:TasksActionsType.DELETE_TASK;
}

interface DeleteTaskSuccessAction {
    type:TasksActionsType.DELETE_TASK_SUCCESS;
    payload: Task;
}

interface DeleteTaskErrorAction {
    type:TasksActionsType.DELETE_TASK_ERROR;
    payload:string;
}

export type TasksAction = CreateTaskAction | CreateTaskSuccessAction | CreateTaskErrorAction |
    GetTasksAction | GetTasksSuccessAction | GetTasksErrorAction |
    EditTaskAction | EditTaskSuccessAction | EditTaskErrorAction |
    DeleteTaskAction | DeleteTaskSuccessAction | DeleteTaskErrorAction
