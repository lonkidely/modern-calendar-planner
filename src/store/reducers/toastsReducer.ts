import {ToastsState, ToastsActionsType, ToastsAction} from '../types/toast';

const initialState: ToastsState = {
    warning: false,
    success: false,
    info: false,
};

export const toastsReducer = (state = initialState, action:ToastsAction): ToastsState => {
    switch (action.type) {
    case ToastsActionsType.SHOW_WARNING:
        return {...state, warning: true};
    case ToastsActionsType.HIDE_WARNING:
        return {...state, warning: false};

    case ToastsActionsType.SHOW_SUCCESS:
        return {...state, success: true};
    case ToastsActionsType.HIDE_SUCCESS:
        return {...state, success: false};

    case ToastsActionsType.SHOW_INFO:
        return {...state, info: true};
    case ToastsActionsType.HIDE_INFO:
        return {...state, info: false};

    default:
        return state;
    }    
};
