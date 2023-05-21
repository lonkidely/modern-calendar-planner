import {UserAction, UserActionsType, UserState} from '../types/user';

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action:UserAction):UserState => {
    switch (action.type) {
    case UserActionsType.LOGIN_USER:
        return {...state, loading: true, error: null, user: null};
    case UserActionsType.LOGIN_USER_SUCCESS:
        return {...state, loading: false, error: null, user: action.payload};
    case UserActionsType.LOGIN_USER_ERROR:
        return {...state, loading: false, error: action.payload};

    case UserActionsType.LOGOUT_USER:
        return {...state, loading: true, error: null};
    case UserActionsType.LOGOUT_USER_SUCCESS:
        return {...state, loading: false, error: null, user: null};
    case UserActionsType.LOGOUT_USER_ERROR:
        return {...state, loading: false, error: action.payload};

    case UserActionsType.AUTH_USER:
        return {...state, loading: true, error: null};
    case UserActionsType.AUTH_USER_SUCCESS:
        return {...state, loading: false, error: null, user: action.payload};
    case UserActionsType.AUTH_USER_ERROR:
        return {...state, loading: false, error: action.payload};

    case UserActionsType.SIGNUP_USER:
        return {...state, loading: true, error: null, user: null};
    case UserActionsType.SIGNUP_USER_SUCCESS:
        return {...state, loading: false, error: null, user: action.payload};
    case UserActionsType.SIGNUP_USER_ERROR:
        return {...state, loading: false, error: action.payload};
            
    default:
        return state;
    }
};

