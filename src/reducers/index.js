import { combineReducers } from 'redux';
import { todos } from './todos_reducer';
import { view } from './view_reducer';

const rootReducer = combineReducers({
	todos, view
});

export default rootReducer;