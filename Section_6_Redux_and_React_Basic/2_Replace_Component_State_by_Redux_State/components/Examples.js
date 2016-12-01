import React, {Component} from 'react';
import Counter2, { a as a2, b } from './Counter';
import Sum from './Sum';
import Describe from './Describe';
import RandomImages from './RandomImages';

export default class Examples extends Component{
    constructor(props){
        super(props);
        this.state = {describe: 'none'};
        this.updateDescribe = this.updateDescribe.bind(this);
    }

    updateDescribe(describe){
        this.setState({describe: describe});
    }

    render(){
        return(
            <div>
                <h1>React</h1>
                <Describe desc = {this.state.describe} />
                <Counter2 countDesc = {this.updateDescribe} />
                <Sum/>
                <RandomImages/>
            </div>
        )
    }
}