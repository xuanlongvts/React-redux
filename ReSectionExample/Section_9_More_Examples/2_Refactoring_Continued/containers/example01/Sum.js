import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSum} from '../../redux/actions/index';

class Sum extends Component{
	constructor(props) {
		super(props);

		this.state = {
			a: 1,
			b: 2
		}
	}

	render(){
		const {state: {a, b}, props: {sum: {result}, onSum}} = this;
		return(
			<p>
				<input type = "textbox"
					value = {a}
					onChange = {(e) => this.setState({a: e.target.value})}
				/> + &nbsp;
				<input type="textbox"
					value = {b}
					onChange = {(e) => this.setState({b: e.target.value})}
				/> =  &nbsp;
				<span>{result}</span> &nbsp;
				<button
					onClick = {()=>
						onSum(a, b)
					}
				>
					Sum
				</button>
			</p>
		)
	}
}

const mapStateToProps = (state) => (
	{
		sum: state.sum
	}
);

const mapDispatchToProps = (dispatch) => ({
		onSum: (a,b) => dispatch(getSum(a,b))
	}
)

const SumContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sum);

export default SumContainer;
