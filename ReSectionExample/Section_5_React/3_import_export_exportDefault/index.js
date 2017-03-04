import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter2, {a as a2, b} from './Components/Counter';
import Sum from './Components/Sum';

console.log('a: ', a2);
console.log('b: ', b);

class Examples extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1>React</h1>
				<Counter2 />
				<Sum />
			</div>
		)
	}
}

ReactDOM.render(
	<Examples />,
	document.getElementById('root')
)
