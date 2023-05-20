import * as NoteActionCreators from './noteActions';
import * as UserActionCreators from './userActions';

export default {
    ...NoteActionCreators,
    ...UserActionCreators
};
