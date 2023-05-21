import * as NoteActionCreators from './noteActions';
import * as UserActionCreators from './userActions';
import * as GoalsActionCreators from './goalsActions';

export default {
    ...NoteActionCreators,
    ...UserActionCreators,
    ...GoalsActionCreators
};
