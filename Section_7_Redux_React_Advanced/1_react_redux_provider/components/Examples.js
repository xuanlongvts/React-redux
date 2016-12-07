import React, {Component} from 'react';
import Counter2, { a as a2, b } from './Counter';
import Sum from './Sum';
import Describe from './Describe';
import RandomImages from './RandomImages';

export default class Examples extends Component{
    constructor(props){
        super(props);
    }

    render(){

        //const {value: {count: {decrease}, count, sum, images}, onDecrement, onSum, onRandomImages} = this.props;

        return(
            <div>
                <h1>React</h1>
                <Describe />
                <Counter2 />
                <Sum />
                <RandomImages />
            </div>
        )
    }
}