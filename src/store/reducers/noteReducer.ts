import {NoteAction, NoteActionsType, NoteState} from '../types/note';

const initialState: NoteState = {
    notes: [],
    loading: false,
    error: null,
};

export const noteReducer = (state = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
    case NoteActionsType.FETCH_NOTES:
        return {...state, loading:true, error:null, notes: []};
    case NoteActionsType.FETCH_NOTES_SUCCESS:
        return {...state, loading:false, error:null, notes: action.payload.sort((a, b) => b.created.getTime() - a.created.getTime())};
    case NoteActionsType.FETCH_NOTES_ERROR:
        return {...state, loading:false, error:action.payload};

    case NoteActionsType.ADD_NOTE:
        return {...state, loading: true, error: null};
    case NoteActionsType.ADD_NOTE_SUCCESS:
        return {...state, loading: false, notes: [...state.notes, action.payload].sort((a, b) => b.created.getTime() - a.created.getTime())};
    case NoteActionsType.ADD_NOTE_ERROR:
        return {...state, loading: false, error: action.payload};

    case NoteActionsType.REMOVE_NOTE:
        return {...state, loading: true, error: null};
    case NoteActionsType.REMOVE_NOTE_SUCCESS:
        return {...state, loading: false, notes: [...state.notes].filter(note => note.id != action.payload.id).sort((a, b) => b.created.getTime() - a.created.getTime())};
    case NoteActionsType.REMOVE_NOTE_ERROR:
        return {...state, loading: false, error: action.payload};

    default:
        return state;
    }
};
