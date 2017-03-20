import React from 'react';
import Footer from '../containers/Footer';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
	<div>
		<h2>Todo with undo</h2>
		<AddTodo />
		<TodoList />
		<Footer />
		<UndoRedo />
	</div>
);

export default App;