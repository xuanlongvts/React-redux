import React, {Component} from 'react';
import Counter from '../container/example01/Counter';
import Sum from '../container/example01/Sum';
import Describe from '../container/example01/Describe';
import RandomImages from '../container/example01/RandomImages';

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
