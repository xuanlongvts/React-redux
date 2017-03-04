import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter2, {a as a2, b} from './Components/Counter';
import Sum from './Components/Sum';

class Describe extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				Describe: <span style={{color: 'red'}}>{this.props.desc}</span>
			</div>
		)
	}
}

class Examples extends Component{
	constructor(props){
		super(props);
		this.state = {
			describe: 'none'
		}
	}

	updateDescribe(describe){
		this.setState({
			describe: describe
		});
	}

	render(){
		return(
			<div>
				<h1>React</h1>
				<Describe desc = {this.state.describe} />
				<Counter2 countDesc = {this.updateDescribe.bind(this)} />
				<Sum sumDesc = {this.updateDescribe.bind(this)} />
			</div>
		)
	}
}

ReactDOM.render(
	<Examples />,
	document.getElementById('root')
)
