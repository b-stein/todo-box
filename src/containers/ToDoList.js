import React from 'react';
import Todo from './ToDo';
import { connect } from 'react-redux';

const ToDoList = ({todos, activeView}) => {
	const displayTodos = todos.filter(todo => {
		if (activeView === 'ACTIVE') {
			return !todo.completed
		} else if (activeView === 'COMPLETED') {
			return todo.completed
		}
		return todo;
	}).map(todo => {
		return ( <Todo {...todo} key={todo.id} /> )
	})

	return (
		<ul>
			{displayTodos}
		</ul>
	)
}

const mapStateToProps = state => ({
	todos: state.todos,
	activeView: state.view
});

export default connect(mapStateToProps)(ToDoList);