import * as NoteActionCreators from './noteActions';
import * as UserActionCreators from './userActions';
import * as GoalsActionCreators from './goalsActions';
import * as TasksActionCreators from './tasksActions';
import * as ToastsActionCreators from './toastsActions';

export default {
    ...NoteActionCreators,
    ...UserActionCreators,
    ...GoalsActionCreators,
    ...TasksActionCreators,
    ...ToastsActionCreators
};
