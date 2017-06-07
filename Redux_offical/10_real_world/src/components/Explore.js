import React, {Component} from 'react';
import PropTyeps from 'prop-types';

const GITHUB_REPO = 'https://github.com/reactjs/redux';

class Explore extends Component{

	static propTypes = {
		value: PropTyeps.string.isRequired,
		onChange: PropTyeps.func.isRequired
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.value !== this.props.value){
			this.setInputValue(nextProps.value);
		}
	}

	setInputValue = val => {
		this.refs.input.value = val;
	}

	handleKeyUp = e => {
		if(e.keyCode === 13){
			this.handleGoClick();
		}
	}

	getInputValue = () => {
		return this.refs.input.value;
	}

	handleGoClick = () => {
		this.props.onChange(this.getInputValue());
	}

	render(){

		return(
			<div>
				<p>Type a username or repo full name and hit 'Go':</p>
				<input type="text" size="45"
					ref="input"
					defaultValue={this.props.value}
					onKeyUp={this.handleKeyUp}
				/>
				<button onClick={this.handleGoClick}>Go!</button>

				<p>
					Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">Github</a>.
				</p>
				<p>
					Move the DevTools with Ctrl+W or hide them with Ctrl+H.
				</p>
			</div>
		)
	}
}

export default Explore;