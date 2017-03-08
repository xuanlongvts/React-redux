import React, {Component} from 'react';

export default class Counter extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<p>
				Clicked: <span>{this.props.count.result}</span> times &nbsp;
				<button onClick={this.props.onDecrement}>Decrease</button>
			</p>
		)
	}
}
