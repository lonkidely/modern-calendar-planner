import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './noteReducer';
import {userReducer} from "./userReducer";
import {goalsReducer} from "./goalsReducer";
import {tasksReducer} from "./tasksReducer";
import {toastsReducer} from "./toastsReducer";

export const rootReducer = combineReducers({
    note: noteReducer,
    user: userReducer,
    goals: goalsReducer,
    tasks: tasksReducer,
    toasts: toastsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
