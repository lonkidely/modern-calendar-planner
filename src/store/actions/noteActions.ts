import {NoteAction, NoteActionsType} from '../types/note';
import {Dispatch} from 'redux';
import {ADD_NOTE_URL, FETCH_NOTES_URL, REMOVE_NOTE_URL} from '@config/config';
import axios from "axios";
import {Note} from '@custom_types/Note';
import {User} from '@custom_types/User';


export const fetchNotes = (userId:string) => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type:NoteActionsType.FETCH_NOTES});
            const response = await axios.post(FETCH_NOTES_URL, {
                "id": userId,
            }, );
            const res = response.data.map(note => {
                return {
                    id:note["id"],
                    name:note["name"],
                    description:note["description"],
                    created:new Date(note["created"]),
                };
            });
            dispatch({
                type: NoteActionsType.FETCH_NOTES_SUCCESS,
                payload: res,
            });
        } catch (e) {
            dispatch({
                type:NoteActionsType.FETCH_NOTES_ERROR,
                payload: 'Произошла ошибка при загрузке заметок',
            });
        }
    };
};

export const addNote = (note:Note, user:User) => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type:NoteActionsType.ADD_NOTE});
            const response = await axios.post(ADD_NOTE_URL, {
                "name":note.name,
                "description":note.description,
                "createdBy": {
                    "id":user.id
                }
            });
            const res: Note = {
                id:response.data["id"],
                name:response.data["name"],
                description:response.data["description"],
                created: new Date(response.data["created"]),
            };
            dispatch({type:NoteActionsType.ADD_NOTE_SUCCESS, payload: res});
        } catch (e) {
            dispatch({
                type:NoteActionsType.ADD_NOTE_ERROR,
                payload: 'Произошла ошибка при загрузке заметок'
            });
        }
    };
};

export const removeNote = (note:Note) => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({type:NoteActionsType.REMOVE_NOTE});
            await axios.post(REMOVE_NOTE_URL, {
                "id":note.id,
            });
            dispatch({type:NoteActionsType.REMOVE_NOTE_SUCCESS, payload: note});
        } catch (e) {
            dispatch({
                type:NoteActionsType.REMOVE_NOTE_ERROR,
                payload: 'Произошла ошибка при удалении заметки'
            });
        }
    };
};
