import {UserAction, UserActionsType} from '../types/user';
import {Dispatch} from 'redux';
import {AUTH_URL, LOGIN_URL, LOGOUT_URL, SIGNUP_URL} from '@config/config';
import axios from 'axios';
import {User} from '@custom_types/User';

export const loginUser = (login, password:string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionsType.LOGIN_USER});
            const response = await axios.post(
                LOGIN_URL, 
                {
                    "login":login,
                    "password":password,
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    withCredentials: true
                }
            );
            const payload:User = response.data;
            payload["birthday"] = new Date(response["birthday"]);
            dispatch({type:UserActionsType.LOGIN_USER_SUCCESS, payload: payload});
        } catch (e) {
            dispatch({
                type:UserActionsType.LOGIN_USER_ERROR,
                payload: "Не удалось произвести вход",
            });
        }
    };
};

export const logoutUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionsType.LOGOUT_USER});
            await axios.delete(
                LOGOUT_URL,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    withCredentials: true
                }
            );
            dispatch({type:UserActionsType.LOGOUT_USER_SUCCESS});
        } catch (e) {
            dispatch({
                type:UserActionsType.LOGOUT_USER_ERROR,
                payload: "Не удалось выйти из системы",
            });
        }
    };
};

export const authUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionsType.AUTH_USER});
            const response = await axios.get(
                AUTH_URL,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    withCredentials: true
                }
            );
            const payload:User = response.data;
            payload["birthday"] = new Date(response["birthday"]);
            dispatch({type:UserActionsType.AUTH_USER_SUCCESS, payload: payload});
        } catch (e) {
            dispatch({
                type:UserActionsType.AUTH_USER_ERROR,
                payload: "Не удалось произвести авторизацию",
            });
        }
    };
};

export const signupUser = (user:User) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type:UserActionsType.SIGNUP_USER});
            const response = await axios.post(
                SIGNUP_URL,
                user,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    withCredentials: true
                }
            );
            const payload:User = response.data;
            payload["birthday"] = new Date(response["birthday"]);
            dispatch({type:UserActionsType.SIGNUP_USER_SUCCESS, payload: payload});
        } catch (e) {
            dispatch({
                type:UserActionsType.SIGNUP_USER_ERROR,
                payload: "Не удалось зарегистрировать пользователя",
            });
        }
    };
};
