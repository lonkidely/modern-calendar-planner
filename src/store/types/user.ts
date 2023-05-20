import {User} from '@custom_types/User';

export interface UserState {
    user: User | null;
    loading: boolean;
    error: null|string;
}

export enum UserActionsType {
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
    LOGIN_USER_ERROR = 'LOGIN_USER_ERROR',

    LOGOUT_USER = 'LOGOUT_USER',
    LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
    LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR',

    AUTH_USER = 'AUTH_USER',
    AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS',
    AUTH_USER_ERROR = 'AUTH_USER_ERROR',

    SIGNUP_USER = 'SIGNUP_USER',
    SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS',
    SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR'
}

interface LoginUserAction {
    type: UserActionsType.LOGIN_USER;
}

interface LoginUserActionSuccess {
    type: UserActionsType.LOGIN_USER_SUCCESS;
    payload: User;
}

interface LoginUserActionError {
    type: UserActionsType.LOGIN_USER_ERROR;
    payload: string;
}

interface LogoutUserAction {
    type: UserActionsType.LOGOUT_USER;
}

interface LogoutUserActionSuccess {
    type: UserActionsType.LOGOUT_USER_SUCCESS;
}

interface LogoutUserActionError {
    type: UserActionsType.LOGOUT_USER_ERROR;
    payload: string;
}

interface AuthUserAction {
    type: UserActionsType.AUTH_USER;
}

interface AuthUserActionSuccess {
    type: UserActionsType.AUTH_USER_SUCCESS;
    payload: User;
}

interface AuthUserActionError {
    type: UserActionsType.AUTH_USER_ERROR;
    payload: string;
}

interface SignupUserAction {
    type: UserActionsType.SIGNUP_USER;
}

interface SignupUserActionSuccess {
    type: UserActionsType.SIGNUP_USER_SUCCESS;
    payload: User;
}

interface SignupUserActionError {
    type: UserActionsType.SIGNUP_USER_ERROR;
    payload: string;
}

export type UserAction = LoginUserAction | LoginUserActionSuccess | LoginUserActionError |
    LogoutUserAction | LogoutUserActionSuccess | LogoutUserActionError |
    AuthUserAction | AuthUserActionSuccess | AuthUserActionError |
    SignupUserAction | SignupUserActionSuccess | SignupUserActionError
