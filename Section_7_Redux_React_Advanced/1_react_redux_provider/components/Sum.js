import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSum} from '../redux/actions/index';

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

const mapStateToProps = (state, ownProps) => {
    return{
        sum: state.sum
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onSum: (a,b) => dispatch(getSum(a,b))
    }
};

const SumContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sum);

export default SumContainer;