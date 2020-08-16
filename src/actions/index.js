export const addToDo = todo => ({
	type: 'ADD_TODO',
	todo
})

export const deleteToDo = id => ({
	type: 'DELETE_TODO',
	id
})

export const toggleToDo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const setView = text => ({
	type: 'SET_VIEW',
	view: text
})