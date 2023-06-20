import {TasksAction, TasksActionsType, TasksState} from '../types/tasks';

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: null
};

export const tasksReducer = (state = initialState, action:TasksAction): TasksState => {
    switch (action.type) {
    case TasksActionsType.CREATE_TASK:
        return {...state, loading: true, error: null};
    case TasksActionsType.CREATE_TASK_SUCCESS:
        return {...state, loading: false, error: null, tasks: [...state.tasks, action.payload]};
    case TasksActionsType.CREATE_TASK_ERROR:
        return {...state, loading: false, error: action.payload};

    case TasksActionsType.GET_TASKS:
        return {...state, loading:true, error:null, tasks:[]};
    case TasksActionsType.GET_TASKS_SUCCESS:
        return {...state, loading:false, error:null, tasks:action.payload};
    case TasksActionsType.GET_TASKS_ERROR:
        return {...state, loading:false, error:action.payload};
        
    case TasksActionsType.EDIT_TASK:
        return {...state, loading:true, error: null};
    case TasksActionsType.EDIT_TASK_SUCCESS:
        return {...state, loading:false, error: null, tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)};
    case TasksActionsType.EDIT_TASK_ERROR:
        return {...state, loading: false, error: action.payload};

    case TasksActionsType.DELETE_TASK:
        return {...state, loading: true, error: null};
    case TasksActionsType.DELETE_TASK_SUCCESS:
        return {...state, loading: false, error: null, tasks: state.tasks.filter(task => task.id !== action.payload.id)};
    case TasksActionsType.DELETE_TASK_ERROR:
        return {...state, loading: false, error: action.payload};

    default:
        return state;
    }    
};
