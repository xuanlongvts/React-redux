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
				<Describe status={this.props.value.count.decrease}
				/>
				<Counter
					count = {this.props.value.count}
					onDecrement = {this.props.onDecrement}
				 />
				<Sum
					sum = {this.props.value.sum.result}
					onSum = {this.props.onSum}
				/>
				<RandomImages
					images = {this.props.value.images}
					onRandomImages = {this.props.onRandomImages}
				/>
			</div>
		)
	}
}
