import {Note} from "@custom_types/Note";

export interface NoteState {
    notes: Note[];
    loading: boolean;
    error: null | string;
}

export enum NoteActionsType {
    FETCH_NOTES = 'FETCH_NOTES',
    FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS',
    FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR',

    ADD_NOTE = 'ADD_NOTE',
    ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS',
    ADD_NOTE_ERROR = 'ADD_NOTE_ERROR',

    REMOVE_NOTE = 'REMOVE_NOTE',
    REMOVE_NOTE_SUCCESS = 'REMOVE_NOTE_SUCCESS',
    REMOVE_NOTE_ERROR = 'REMOVE_NOTE_ERROR'
}

interface FetchNotesAction {
    type: NoteActionsType.FETCH_NOTES;
}

interface FetchNotesSuccessAction {
    type: NoteActionsType.FETCH_NOTES_SUCCESS;
    payload: Note[];
}

interface FetchNotesErrorAction {
    type: NoteActionsType.FETCH_NOTES_ERROR;
    payload: string;
}

interface AddNoteAction {
    type: NoteActionsType.ADD_NOTE;
}

interface AddNoteSuccessAction {
    type: NoteActionsType.ADD_NOTE_SUCCESS;
    payload: Note;
}

interface AddNoteErrorAction {
    type: NoteActionsType.ADD_NOTE_ERROR;
    payload: string;
}

interface RemoveNoteAction {
    type: NoteActionsType.REMOVE_NOTE;
}

interface RemoveNoteSuccessAction {
    type: NoteActionsType.REMOVE_NOTE_SUCCESS;
    payload: Note;
}

interface RemoveNoteErrorAction {
    type: NoteActionsType.REMOVE_NOTE_ERROR;
    payload: string;
}

export type NoteAction = FetchNotesAction | FetchNotesSuccessAction | FetchNotesErrorAction |
    AddNoteAction | AddNoteSuccessAction | AddNoteErrorAction |
    RemoveNoteAction | RemoveNoteSuccessAction | RemoveNoteErrorAction

