import React, { Component } from 'react';

export default class Sum extends Component{
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


