import React, {Component, PropTypes} from 'react';

class Counter extends Component{

    incrementIfOdd = () => {
        if(this.props.value % 2 !== 0){
            this.props.onIncrement();
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000);
    };

    render(){
        const {value, onIncrement, onDecrement} = this.props;
        return(
            <p>
                Clicked: {value} times &nbsp;
                <button onClick={onIncrement}>+</button> &nbsp;
                <button onClick={onDecrement}>-</button> &nbsp;
                <button onClick={this.incrementIfOdd}>Increment if odd</button> &nbsp;
                <button onClick={this.incrementAsync}>Increment async</button> &nbsp;
            </p>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;