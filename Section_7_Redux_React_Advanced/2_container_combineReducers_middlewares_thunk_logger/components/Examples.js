import React, {Component} from 'react';
import Counter from '../container/Counter';
import Sum from '../container/Sum';
import Describe from '../container/Describe';
import RandomImages from '../container/RandomImages';

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
                <Counter />
                <Sum />
                <RandomImages />
            </div>
        )
    }
}