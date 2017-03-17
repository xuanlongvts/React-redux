import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodosList extends Component{
	render(){
		return(
			// <ul>
			// 	{
			// 		this.props.todos.map((todo) => (
			// 			<Todo key = {todo.id} {...todo} />
			// 		))
			// 	}
			// </ul>

			<Todo />
		)
	}
}

export default connect(
	(state) => {
		const {todosList, todosFilter} = state.todos;
		switch (todosFilter){
			case 'SHOW_ALL':
				return {
					todos: todosList
				};
			case 'SHOW_ACTIVE':
				return {
					todos: todosList.filter((todo) => !todo.completed)
				}
			case 'SHOW_COMPLETED':
				return {
					todos: todosList.filter((todo) => todo.completed)
				}
			default:
				return console.error('unexpected "todosFilter"', todosFilter);
		}
	},
	null
)(TodosList);
