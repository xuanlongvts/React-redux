import React, {Component} from 'react';

export default class Describe extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {status} = this.props;
		return(
			<p>
				Decrease:
				<span style={{color: 'red'}}> &nbsp;
					{status}
				</span>
			</p>
		)
	}
}
