import {ToastsAction, ToastsActionsType} from '../types/toast';
import {Dispatch} from 'redux';

export const showWarning = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.SHOW_WARNING});
    };
};

export const hideWarning = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.HIDE_WARNING});
    };
};

export const showSuccess = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.SHOW_SUCCESS});
    };
};

export const hideSuccess = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.HIDE_SUCCESS});
    };
};

export const showInfo = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.SHOW_INFO});
    };
};

export const hideInfo = () => {
    return (dispatch: Dispatch<ToastsAction>) => {
        dispatch({type:ToastsActionsType.HIDE_INFO});
    };
};
