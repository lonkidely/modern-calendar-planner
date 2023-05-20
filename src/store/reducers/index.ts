import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './noteReducer';
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    note: noteReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
