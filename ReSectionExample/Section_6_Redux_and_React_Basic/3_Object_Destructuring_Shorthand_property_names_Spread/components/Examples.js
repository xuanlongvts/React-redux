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
		const {value: {count: {decrease}, count, sum: {result}, images}, onDecrement, onSum, onRandomImages} = this.props;
		return(
			<div>
				<Describe status={decrease}
				/>
				<Counter
					count = {count}
					onDecrement = {onDecrement}
				 />
				<Sum
					sum = {result}
					onSum = {onSum}
				/>
				<RandomImages
					images = {images}
					onRandomImages = {onRandomImages}
				/>
			</div>
		)
	}
}
