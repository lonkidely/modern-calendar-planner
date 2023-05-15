import React from 'react';
import './NotesPanel.scss';
import {Note} from "@components/Note/Note";

export const NotesPanel: React.FC<unknown> = () => {
    return (
        <div className="notes_panel">
            <form className="notes_panel__new_note">
                <div className="notes_panel__header">Добавить заметку</div>
                <input className="notes_panel__new_note__input__title" placeholder="Заголовок заметки..."/>
                <textarea className="notes_panel__new_note__input__content" placeholder="Текст заметки..." />
                <button type="submit" className="notes_panel__new_note__button">Добавить</button>
            </form>
            <div className="notes_panel__divider"></div>
            <div className="notes_panel__header">Мои заметки</div>
            <Note title="Тестовая заметка 1" content="Ntcnjdfz asndasdasdadjaj asdaskda" />
            <Note title="Тестовая заметка 2" content="Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda" />
            <Note title="Тестовая заметка 3" content="Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda" />
            <Note title="Тестовая заметка 4" content="Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda" />
            <Note title="Тестовая заметка 5" content="Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda Ntcnjdfz asndasdasdadjaj asdaskda" />
        </div>
    );
};
