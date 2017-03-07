import React, {Component} from 'react';

export default class Describe extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<p>
				Decrease: <span style={{color: 'red'}}>{this.props.desc}</span>
			</p>
		)
	}
}
