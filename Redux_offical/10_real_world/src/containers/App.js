import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import Explore from '../components/Explore';
import {resetErrorMessage} from '../actions/index';

class App extends Component{

	static propTypes = {
		errMessage: PropTypes.string,
		resetErrorMessage: PropTypes.func.isRequired,
		inputValue: PropTypes.string.isRequired,
		children: PropTypes.node
	}

	handleDismissClick = e => {
		e.preventDefault();
		this.props.resetErrorMessage();
	}

	handleChange = nextValue => {
		browserHistory.push(`/${nextValue}`);
	}

	renderErrorMessage(){
		const {errMessage} = this.props;

		if(!errMessage){
			return null
		}

		return(
			<p style={{ backgroundColor: '#e99', padding: 10 }}>
				{errMessage} {' '}
				<button onClick={this.handleDismissClick}>
					Dismiss
				</button>
			</p>
		)
	}
	
	render(){
		const {children, inputValue} = this.props;
		return(
			<div>
				<Explore value={inputValue} onChange={this.handleChange} />
				<hr />
				{this.renderErrorMessage()}
				{children}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	errMessage: state.errMessage,
	inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
	resetErrorMessage
})(App);