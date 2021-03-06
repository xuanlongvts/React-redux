import React, {Component} from 'react';
import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Counter.render()');
        const {count: {result}, onDecrement} = this.props;
        return (
            <div>
                Clicked: <span>{result}</span> times
                <button onClick={onDecrement}>Decrease</button>
                <p/>
            </div>
        )
    }
}

/*const mapStateToProps = (state, ownProps) => ({count: state.count});

const mapDispatchToProps = (dispatch, ownProps) => ({onDecrement:() => dispatch(decrease())});

const CounterContainer = connect(
    mapStateToProps, mapDispatchToProps
)(Counter);*/

const CounterContainer = connect(
    (state, ownProps) => ({
        count: state.count
    }),
    {
        onDecrement: decrease
    }
)(Counter);

export default CounterContainer;