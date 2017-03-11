import React, {Component} from 'react';

export default class Examples2 extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<h1>Examples2</h1>
				Hello, {this.props.params.name || 'world'}
			</div>
		)
	}
}