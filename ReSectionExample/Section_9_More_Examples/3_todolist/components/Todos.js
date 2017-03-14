import React, {Component} from 'react';
import TodosList from '../containers/todos/TodosList';
import AddTodos from '../containers/todos/AddTodo';

export default class Todos extends Component{
	render(){
		return (
			<div>
				<h1>Todo List</h1>
				<TodosList />
				<AddTodos />
			</div>
		)
	}
}
