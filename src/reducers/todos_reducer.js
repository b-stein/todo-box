export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
		case 'DELETE_TODO':
			return state.filter(stateToDo => stateToDo.id !== action.id);
		case 'TOGGLE_TODO':
			return state.map(todo => {
				if (action.id === todo.id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		default:
      return state;
  }
}