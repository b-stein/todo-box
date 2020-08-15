import React from 'react';
import { deleteToDo, toggleToDo } from '../actions';
import { connect } from 'react-redux';

const ToDo = ({ id, todo, completed, deleteToDo, toggleToDo }) => {
	return (
		<li className={completed ? 'completed' : 'not-completed'}>
			{todo}
			<button onClick={() => deleteToDo(id)}>Remove</button>
			<button onClick={() => toggleToDo(id)}>Done</button>
		</li>
	)
}

const mapDispatchToProps = dispatch => ({
	deleteToDo: id => dispatch( deleteToDo(id) ),
	toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);