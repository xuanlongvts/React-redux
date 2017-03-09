import React, {Component} from 'react';
import {connect} from 'react-redux';

class Describe extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {status} = this.props;
		return(
			<p>
				Decrease:
				<span style={{color: 'red'}}> &nbsp;
					{status}
				</span>
			</p>
		)
	}
}

const mapStateToProps = (state) => ({
	status: state.count.decrease
})

const DecribeContainer = connect(
	mapStateToProps
)(Describe);

export default DecribeContainer;
