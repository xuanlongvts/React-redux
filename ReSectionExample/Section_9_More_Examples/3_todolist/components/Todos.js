import React, {Component} from 'react';
import TodosList from '../containers/todos/TodosList';
import AddTodos from '../containers/todos/AddTodo';
import FiltersList from '../containers/todos/FiltersList';

export default class Todos extends Component{
	render(){
		return (
			<div>
				<h1>Todo List</h1>
				<AddTodos />
				<TodosList />
				<FiltersList />
			</div>
		)
	}
}
