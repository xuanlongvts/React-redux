import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSum} from '../../redux/actions/index';

class Sum extends Component {
    constructor(props) {
        super(props);
        this.state = {a: 1, b: 2}
    }

    render() {
        console.log('Sum.render()');

        const {state: {a,b}, props: {sum, onSum}} = this;

        return (
            <div>
                <input value={a} onChange={(e)=>this.setState({a: e.target.value})}/>
                + <input value={b} onChange={(e)=>this.setState({b: e.target.value})}/>
                = <span>{sum}</span>
                <button onClick={() =>
                    onSum(a, b)}>
                    Sum
                </button>
                <p/>
            </div>
        )
    }
}

const SumContainer = connect(
    (state, ownProps) => ({
        sum: state.examples.sum
    }),
    {
        onSum: (a,b) => getSum(a,b)
    }
)(Sum);

export default SumContainer;