import React, {Component} from 'react';

export default class Examples2 extends Component{
	constructor(props) {
		super(props);
		console.log('this.props: ', this.props);
	}

	render(){
		return(
			<div>
				<h1>Examples2</h1>
				Hello, {this.props.params.name || 'world'}, <br />

				<span>getParameter: {this.props.location.query.id}</span>
			</div>
		)
	}
}