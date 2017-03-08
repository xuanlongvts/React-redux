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
		return(
			<p>
				<input type = "textbox"
					value = {this.state.a}
					onChange = {(e) => this.setState({a: e.target.value})}
				/> + &nbsp;
				<input type="textbox"
					value = {this.state.b}
					onChange = {(e) => this.setState({b: e.target.value})}
				/> =  &nbsp;
				<span>{this.props.sum}</span> &nbsp;
				<button
					onClick = {()=>
						this.props.onSum(this.state.a, this.state.b)
					}
				>
					Sum
				</button>
			</p>
		)
	}
}
