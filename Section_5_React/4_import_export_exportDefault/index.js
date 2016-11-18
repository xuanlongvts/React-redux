import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter2, { a as a2, b} from './components/Counter';
import Sum from './components/Sum';

console.log(a2);
console.log(b);

class Exmples extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('Example.render()');
        return(
            <div>
                <h1>React</h1>
                <Counter2 />
                <Sum />
            </div>
        );
    }
}

ReactDOM.render(
    <Exmples/>,
    document.getElementById('root')
);