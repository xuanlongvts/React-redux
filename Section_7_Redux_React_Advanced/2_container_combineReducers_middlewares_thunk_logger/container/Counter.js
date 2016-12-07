import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';

const CounterContainer = connect(
    (state, ownProps) => ({
        count: state.count
    }),
    {
        onDecrement: decrease
    }
)(Counter);

export default CounterContainer;