import React from 'react';
import { setView } from '../actions';
import { connect } from 'react-redux';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';

const Header = ({ setView }) => {
	return (
		<div>
			<h1>Another Todo Box</h1>
			<div className='button-container'>
				<button onClick={() => setView('ALL')}>Show All</button>
				<button onClick={() => setView('ACTIVE')}>Show Active</button>
				<button onClick={() => setView('COMPLETED')}>Show Completed</button>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	setView: text => dispatch( setView(text) )
})

export default connect(null, mapDispatchToProps)(Header);