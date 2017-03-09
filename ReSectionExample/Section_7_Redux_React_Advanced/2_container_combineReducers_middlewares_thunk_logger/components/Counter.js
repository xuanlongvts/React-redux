import React, {Component} from 'react';

export default class Counter extends Component{
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
