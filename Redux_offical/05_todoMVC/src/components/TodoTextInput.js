import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

export default class TodoTextInput extends Component{

	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		editing: PropTypes.bool,
		newTodo: PropTypes.bool
	}

	state = {
		text: this.props.text || ''
	}

	handleChange = e => {
		console.log('handleChange');
		this.setState({
			text: e.target.value
		})
	}

	handleBlur = e => {
		console.log('No newTodo');
		if(!this.props.newTodo){
			console.log('Blur');
			this.props.onSave(e.target.value);
		}
	}

	handleSubmit = e => {
		const text = e.target.value.trim();

		if(e.which === 13){
			this.props.onSave(text);
			if(this.props.newTodo){
				this.setState({
					text: ''
				});
			}
		}
	}

	render(){
		return(
			<input 
				className={
					classnames({
						edit: this.props.editing,
						'new-todo': this.props.newTodo
					})
				}
				type="text"
				placeholder={this.props.placeholder}
				autoFocus="true"
				value={this.state.text}
				onChange={this.handleChange}
				onBlur={this.handleBlur}
				onKeyDown={this.handleSubmit}
			/>
		)
	}
}