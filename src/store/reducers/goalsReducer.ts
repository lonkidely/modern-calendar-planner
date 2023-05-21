import {GoalsAction, GoalsActionsType, GoalsState} from "../types/goals";

const initialState: GoalsState = {
    goals: [],
    loading: false,
    error: null
};

export const goalsReducer = (state = initialState, action:GoalsAction): GoalsState => {
    switch (action.type) {
    case GoalsActionsType.CREATE_GOAL:
        return {...state, loading: true, error: null, goals: []};
    case GoalsActionsType.CREATE_GOAL_SUCCESS:
        return {...state, loading: false, error: null, goals: [...state.goals, action.payload]};
    case GoalsActionsType.CREATE_GOAL_ERROR:
        return {...state, loading: false, error: action.payload};

    case GoalsActionsType.DELETE_GOAL:
        return {...state, loading: true, error: null, goals:[]};
    case GoalsActionsType.DELETE_GOAL_SUCCESS:
        return {...state, loading: false, error: null, goals: state.goals.filter(goal => goal.id !== action.payload.id)};
    case GoalsActionsType.DELETE_GOAL_ERROR:
        return {...state, loading: false, error: action.payload};
        
    case GoalsActionsType.CHANGE_GOAL:
        return {...state, loading: true, error: null, goals: []};
    case GoalsActionsType.CHANGE_GOAL_SUCCESS:
        return {...state, loading: false, error: null, goals: state.goals.map(goal => goal.id === action.payload.id ? action.payload : goal)};
    case GoalsActionsType.CHANGE_GOAL_ERROR:
        return {...state, loading: false, error: action.payload};
        
    case GoalsActionsType.GET_GOALS:
        return {...state, loading: true, error: null, goals: []};
    case GoalsActionsType.GET_GOALS_SUCCESS:
        return {...state, loading: false, error: null, goals: action.payload};
    case GoalsActionsType.GET_GOALS_ERROR:
        return {...state, loading: false, error: action.payload};
        
    default:
        return state;
    }
};
