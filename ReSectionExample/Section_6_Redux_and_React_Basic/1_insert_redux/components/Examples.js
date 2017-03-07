import React, {Component} from 'react';
import Counter from './Counter';
import Sum from './Sum';
import Describe from './Describe';
import RandomImages from './RandomImages';

export default class Examples extends Component{
	constructor(props) {
		super(props);
		this.state = {
			describe: 'none'
		}
	}

	updateDescribe(describe){
		this.setState({
			describe: describe
		})
	}

	render() {
		return(
			<div>
				<Describe desc={this.state.describe} />
				<Counter  countDesc = {this.updateDescribe.bind(this)} />
				<Sum sumButton = {this.updateDescribe.bind(this)} />
				<RandomImages/>
			</div>
		)
	}
}
