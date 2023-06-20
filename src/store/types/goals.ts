import {Goal} from '@custom_types/Goal';

export interface GoalsState {
    goals: Goal[];
    loading: boolean;
    error: null | string;
}

export enum GoalsActionsType {
    CREATE_GOAL = 'CREATE_GOAL',
    CREATE_GOAL_SUCCESS = 'CREATE_GOAL_SUCCESS',
    CREATE_GOAL_ERROR = 'CREATE_GOAL_ERROR',

    DELETE_GOAL = 'DELETE_GOAL',
    DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS',
    DELETE_GOAL_ERROR = 'DELETE_GOAL_ERROR',

    CHANGE_GOAL = 'CHANGE_GOAL',
    CHANGE_GOAL_SUCCESS = 'CHANGE_GOAL_SUCCESS',
    CHANGE_GOAL_ERROR = 'CHANGE_GOAL_ERROR',

    GET_GOALS = 'GET_GOALS',
    GET_GOALS_SUCCESS = 'GET_GOALS_SUCCESS',
    GET_GOALS_ERROR = 'GET_GOALS_ERROR',
}

interface CreateGoalAction {
    type: GoalsActionsType.CREATE_GOAL;
}

interface CreateGoalSuccessAction {
    type: GoalsActionsType.CREATE_GOAL_SUCCESS;
    payload: Goal;
}

interface CreateGoalErrorAction {
    type: GoalsActionsType.CREATE_GOAL_ERROR;
    payload: string;
}

interface DeleteGoalAction {
    type: GoalsActionsType.DELETE_GOAL;
}

interface DeleteGoalSuccessAction {
    type: GoalsActionsType.DELETE_GOAL_SUCCESS;
    payload: Goal;
}

interface DeleteGoalErrorAction {
    type: GoalsActionsType.DELETE_GOAL_ERROR;
    payload: string;
}

interface ChangeGoalAction {
    type: GoalsActionsType.CHANGE_GOAL;
}

interface ChangeGoalSuccessAction {
    type: GoalsActionsType.CHANGE_GOAL_SUCCESS;
    payload: Goal;
}

interface ChangeGoalErrorAction {
    type: GoalsActionsType.CHANGE_GOAL_ERROR;
    payload: string;
}

interface GetGoalsAction {
    type: GoalsActionsType.GET_GOALS;
}

interface GetGoalsSuccessAction {
    type: GoalsActionsType.GET_GOALS_SUCCESS;
    payload: Goal[];
}

interface GetGoalsErrorAction {
    type: GoalsActionsType.GET_GOALS_ERROR;
    payload: string;
}

export type GoalsAction = CreateGoalAction | CreateGoalSuccessAction | CreateGoalErrorAction |
    DeleteGoalAction | DeleteGoalSuccessAction | DeleteGoalErrorAction |
    ChangeGoalAction | ChangeGoalSuccessAction | ChangeGoalErrorAction |
    GetGoalsAction | GetGoalsSuccessAction | GetGoalsErrorAction
