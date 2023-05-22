
export interface ToastsState {
    warning:boolean;
    success:boolean;
    info:boolean;
}

export enum ToastsActionsType {
    SHOW_WARNING = 'SHOW_WARNING',
    HIDE_WARNING = 'HIDE_WARNING',

    SHOW_SUCCESS = 'SHOW_SUCCESS',
    HIDE_SUCCESS = 'HIDE_SUCCESS',

    SHOW_INFO = 'SHOW_INFO',
    HIDE_INFO = 'HIDE_INFO',
}

interface ShowWarningAction {
    type: ToastsActionsType.SHOW_WARNING;
}

interface HideWarningAction {
    type: ToastsActionsType.HIDE_WARNING;
}
interface ShowSuccessAction {
    type: ToastsActionsType.SHOW_SUCCESS;
}

interface HideSuccessAction {
    type: ToastsActionsType.HIDE_SUCCESS;
}

interface ShowInfoAction {
    type: ToastsActionsType.SHOW_INFO;
}

interface HideInfoAction {
    type: ToastsActionsType.HIDE_INFO;
}

export type ToastsAction = ShowWarningAction | HideWarningAction |
    ShowSuccessAction | HideSuccessAction | ShowInfoAction | HideInfoAction
