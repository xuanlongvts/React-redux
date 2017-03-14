import React, {Component} from 'react';
import Counter from '../containers/example01/Counter';
import Sum from '../containers/example01/Sum';
import Describe from '../containers/example01/Describe';
import RandomImages from '../containers/example01/RandomImages';

export default class Examples extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Describe />
				<Counter />
				<Sum />
				<RandomImages />
			</div>
		)
	}
}
