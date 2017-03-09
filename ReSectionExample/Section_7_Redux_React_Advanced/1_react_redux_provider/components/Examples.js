import React, {Component} from 'react';
import Counter from './Counter';
import Sum from './Sum';
import Describe from './Describe';
import RandomImages from './RandomImages';

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
