import React, { Component } from 'react';
import Header from './Header';
import AddTodoForm from '../containers/AddTodoForm';
import ToDoList from '../containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
        <AddTodoForm />
				<ToDoList />
      </div>
    );
  }
}

export default App;