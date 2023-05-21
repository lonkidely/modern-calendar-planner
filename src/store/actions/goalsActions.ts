import {GoalsAction, GoalsActionsType} from "../types/goals";
import {Dispatch} from 'redux';
import {CHANGE_GOAL_URL, CREATE_GOAL_URL, DELETE_GOAL_URL, GET_GOALS_URL} from '@config/config';
import axios from "axios";
import {Goal} from "@custom_types/Goal";

export const createGoal = (goal:Goal) => {
    return async (dispatch: Dispatch<GoalsAction>) => {
        try {
            dispatch({
                type: GoalsActionsType.CREATE_GOAL,
            });

            const response = await axios.post(
                CREATE_GOAL_URL,
                goal,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);
            const payload: Goal = {
                id: response["id"],
                startDate: new Date(response["startDate"]),
                endDate: new Date(response["endDate"]),
                title: response["title"],
                important: response["important"],
                urgency: response["urgency"],
                tasks: response["tasks"],
            };
            dispatch({
                type: GoalsActionsType.CREATE_GOAL_SUCCESS,
                payload: payload,
            });
        } catch (e) {
            dispatch(
                {
                    type:GoalsActionsType.CREATE_GOAL_ERROR,
                    payload: "При создании цели возникла ошибка"
                }
            );
        }
    };
};

export const deleteGoal = (goal: Goal) => {
    return async (dispatch: Dispatch<GoalsAction>) => {
        try {
            dispatch({
                type: GoalsActionsType.DELETE_GOAL,
            });

            await axios.post(
                DELETE_GOAL_URL,
                goal,
                {
                    withCredentials: true,
                }
            );

            dispatch({
                type: GoalsActionsType.DELETE_GOAL_SUCCESS,
                payload: goal,
            });
        } catch (e) {
            dispatch(
                {
                    type:GoalsActionsType.DELETE_GOAL_ERROR,
                    payload: "При удалении цели возникла ошибка"
                }
            );
        }
    };
};

export const changeGoal = (goal: Goal) => {
    return async (dispatch: Dispatch<GoalsAction>) => {
        try {
            dispatch({
                type: GoalsActionsType.CHANGE_GOAL,
            });

            const response = await axios.post(
                CHANGE_GOAL_URL,
                goal,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);

            const payload: Goal = {
                id: response["id"],
                startDate: new Date(response["startDate"]),
                endDate: new Date(response["endDate"]),
                title: response["title"],
                important: response["important"],
                urgency: response["urgency"],
                tasks: response["tasks"],
            };

            dispatch({
                type: GoalsActionsType.CHANGE_GOAL_SUCCESS,
                payload: payload,
            });
        } catch (e) {
            dispatch(
                {
                    type:GoalsActionsType.CHANGE_GOAL_ERROR,
                    payload: "При изменении цели возникла ошибка"
                }
            );
        }
    };
};

export const getGoals = () => {
    return async (dispatch: Dispatch<GoalsAction>) => {
        try {
            dispatch({
                type: GoalsActionsType.GET_GOALS,
            });

            const response = await axios.get(
                GET_GOALS_URL,
                {
                    withCredentials: true,
                }
            ).then(res => res.data);
            const payload: Goal[] = response.map(goal => {
                const curGoal: Goal = {};
                curGoal.id = goal["id"];
                curGoal.startDate = new Date(goal["startDate"]);
                curGoal.endDate = new Date(goal["endDate"]);
                curGoal.title = goal["title"];
                curGoal.important = goal["important"];
                curGoal.urgency = goal["urgency"];
                curGoal.tasks = goal["tasks"];
                return curGoal;
            });
            dispatch({
                type: GoalsActionsType.GET_GOALS_SUCCESS,
                payload: payload,
            });
        } catch (e) {
            dispatch(
                {
                    type:GoalsActionsType.GET_GOALS_ERROR,
                    payload: "При получении списка целей возникла ошибка"
                }
            );
        }
    };
};
