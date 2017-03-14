import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class TodosList extends Component{
	render(){
		return(
			<ul>
				{
					this.props.todos.map((todo) => (
						<li key={todo.id}>{todo.text}</li>
					))
				}
			</ul>
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
			default:
				return console.error('unexpected "todosFilter"', todosFilter);
		}
	},
	null
)(TodosList);
