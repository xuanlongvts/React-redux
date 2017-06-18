import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadUser} from '../actions/index';

const loadData = ({login, loadUser}) => {
	//console.log('login: ', loadUser);
	loadUser(login, ['name']);
}

class UserPage extends Component{

	static propTypes = {
		login: PropTypes.string.isRequired,
		loadUser: PropTypes.func.isRequired
	}

	componentWillMount() {
		console.log('props: ', this.props);
		loadData(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.login !== this.props.login){
			loadData(nextProps);
		}
	}

	render(){
		return(
			<div>UserPage</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const login = ownProps.params.login.toLowerCase();

	return {
		login
	}
}

export default connect(mapStateToProps, {
	loadUser
})(UserPage);