import React, {Component, PropTypes} from 'react';
import * as types from '../constants/TodoFilters';
import Footer from './Footer';
import TodoItem from './TodoItem';

export default class MainSection extends Component{

	static propTypes = {
		todos: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}

	state = {
		filter: types.SHOW_ALL
	}

	handleShow = filter => {
		this.setState({
			filter	
		})
	}

	handleClearCompleted = () => {
		this.props.actions.clearCompleted();
	}

	renderToggleAll(completedCount){
		const {todos, actions} = this.props;

		if(todos.length > 0){
			return(
				<input 
					className="toggle-all"
					type="checkbox"
					checked={completedCount === todos.length}
					onChange={actions.completeAll}
				/>
			)
		}
	}

	renderFooter(completedCount){
		const {todos} = this.props;
		const {filter} = this.state;
		const activeCount = todos.length - completedCount;

		if(todos.length){
			return(
				<Footer completedCount={completedCount}
					activeCount={activeCount}
					filter={filter}
					onClearCompleted={this.handleClearCompleted}
					onShow={this.handleShow}
				/>
			)
		}
	}

	render(){
		const {todos, actions} = this.props;
		const {filter} = this.state;

		const completedCount = todos.reduce((count, todo) => 
			todo.completed ? count + 1 : count,
			0
		);

		let filteredTodos = null;

		switch (filter){
			case types.SHOW_ALL:
				filteredTodos = todos;
				break;
			case types.SHOW_ACTIVE:
				console.log('show_active');
				filteredTodos = todos.filter(todo => !todo.completed);
				break;
			case types.SHOW_COMPLETED:
				console.log('show_completed');
				filteredTodos = todos.filter(todo => todo.completed);
				break;
		}

		return(
			<section className="main">
				{this.renderToggleAll(completedCount)}
				<ul className="todo-list">
					{filteredTodos &&
						filteredTodos.map(todo => 
							<TodoItem key={todo.id} 
								todo={todo} {...actions}
							/>
						)
					}
				</ul>
				{this.renderFooter(completedCount)}
			</section>
		)
	}
}