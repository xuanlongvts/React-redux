import React, {Component} from 'react';
import Counter from '../containers/Counter';
import Sum from '../containers/Sum';
import Describe from '../containers/Describe';
import RandomImages from '../containers/RandomImages';

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
