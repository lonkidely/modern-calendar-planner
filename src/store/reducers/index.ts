import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './noteReducer';
import {userReducer} from "./userReducer";
import {goalsReducer} from "./goalsReducer";

export const rootReducer = combineReducers({
    note: noteReducer,
    user: userReducer,
    goals: goalsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
