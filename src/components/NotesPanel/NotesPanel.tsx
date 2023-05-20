import React, {useEffect} from 'react';
import './NotesPanel.scss';
import {NoteComponent} from '@components/Note/NoteComponent';
import {Note as NoteType} from '@custom_types/Note';
import {useTypedSelector} from '@hooks/useTypedSelector';
import {useActions} from '@hooks/useActions';
import {User} from "@custom_types/User";

export const NotesPanel: React.FC<unknown> = () => {
    const {notes, loading, error} = useTypedSelector(store => store.note);
    const {fetchNotes, addNote} = useActions();

    useEffect(() => {
        fetchNotes("c99a4927-f2f8-4a9f-ba29-0d37f9eff09f");
    }, []);


    const addNoteFunc = (event) => {
        event.preventDefault();

        const title = (document.getElementsByClassName('notes_panel__new_note__input__title')[0] as HTMLInputElement).value;
        const content = (document.getElementsByClassName('notes_panel__new_note__input__content')[0] as HTMLInputElement).value;

        if (title.trim() === "" || content.trim() === "") {
            return;
        }

        const newNote: NoteType = {
            name: title,
            description: content,
        };
        const newUser: User = {
            "id": "c99a4927-f2f8-4a9f-ba29-0d37f9eff09f",
        };

        addNote(newNote, newUser);

        (document.getElementsByClassName('notes_panel__new_note__input__title')[0] as HTMLInputElement).value = "";
        (document.getElementsByClassName('notes_panel__new_note__input__content')[0] as HTMLInputElement).value = "";
    };

    return (
        <div className="notes_panel notes_panel_hidden">
            <form className="notes_panel__new_note">
                <div className="notes_panel__header">Добавить заметку</div>
                <input className="notes_panel__new_note__input__title" placeholder="Заголовок заметки..."/>
                <textarea className="notes_panel__new_note__input__content" placeholder="Текст заметки..." />
                <button type="submit" className="notes_panel__new_note__button" onClick={addNoteFunc}>Добавить</button>
            </form>
            <div className="notes_panel__divider"></div>
            <div className="notes_panel__header">Мои заметки</div>
            {loading === false && error === null ?
                notes.map(note =>
                    <NoteComponent key={note.id} note={note} />
                )
                :
                <div></div>
            }

        </div>
    );
};
