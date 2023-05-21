import * as NoteActionCreators from './noteActions';
import * as UserActionCreators from './userActions';
import * as GoalsActionCreators from './goalsActions';
import * as TasksActionCreators from './tasksActions';

export default {
    ...NoteActionCreators,
    ...UserActionCreators,
    ...GoalsActionCreators,
    ...TasksActionCreators
};
