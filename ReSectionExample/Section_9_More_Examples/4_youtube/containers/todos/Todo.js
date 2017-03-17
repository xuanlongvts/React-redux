import React, {Component, PropTypes} from 'react';
import {toggleTodo} from '../../redux/actions/todos';
import {connect} from 'react-redux';

// const Todo = ({id, toggleTodo, completed, text}) => (
// 	<li
// 		onClick = {() => toggleTodo(id)}
// 		style = {{marginBottom: '20px', textDecoration: completed? 'line-through': 'none'}}
// 	>
// 		{text}
// 	</li>
// );

// Todo.propsTypes = {
// 	toggleTodo: PropTypes.func.isRequired,
// 	completed: PropTypes.bool.isRequired,
// 	text: PropTypes.string.isRequired
// }

// export default connect(
// 	null,
// 	{
// 		toggleTodo
// 	}
// )(Todo);

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		const {todo, onToggleTodo} = this.props;
		return(
			<ul>
			{(todo) && todo.map((todo) => (
					<li
						key={todo.id}
						style={{textDecoration: todo.completed?'line-through':'none'}}
						onClick = {() => onToggleTodo(todo.id)}
					>
						{todo.text}
					</li>
				))
			}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	//todo: state.todos.todosList

	const {todosList, todosFilter} = state.todos;
	switch (todosFilter){
		case 'SHOW_ALL':
			return {
				todo: todosList
			};
		case 'SHOW_ACTIVE':
			return {
				todo: todosList.filter((todo) => !todo.completed)
			}
		case 'SHOW_COMPLETED':
			return {
				todo: todosList.filter((todo) => todo.completed)
			}
		default:
			return console.error('unexpected "todosFilter"', todosFilter);
	}
};

const mapDispatchToProps = (dispatch) => ({
	onToggleTodo: (id) => dispatch(toggleTodo(id))
});

const TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo);

export default TodoContainer;
