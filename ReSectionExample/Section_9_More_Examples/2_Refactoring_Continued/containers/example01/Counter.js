import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrease} from '../../redux/actions/index';

class Counter extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {count: {result}, onDecrement} = this.props;
		return(
			<p>
				Clicked: <span>{result}</span> times &nbsp;
				<button onClick={onDecrement}>Decrease</button>
			</p>
		)
	}
}


const mapStateToProps = (state) => ({count: state.count});

const mapDispatchToProps = (dispatch) => ({onDecrement:() => dispatch(decrease())});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;
