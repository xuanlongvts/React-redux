import React, {Component} from 'react';

export default class Counter extends Component{
	constructor(props) {
		super(props);
		this.state = { count: 0 };
	}

	decrease(){
		this.setState({
			count: this.state.count - 1
		});

		this.props.countDesc('Click "describe" button');
	}

	render(){
		return(
			<p>
				Clicked: <span>{this.state.count}</span> times &nbsp;
				<button onClick={this.decrease.bind(this)}>Decrease</button>
			</p>
		)
	}
}
