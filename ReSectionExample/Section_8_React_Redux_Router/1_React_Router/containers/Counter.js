import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';

const mapStateToProps = (state) => ({count: state.count});

const mapDispatchToProps = (dispatch) => ({onDecrement:() => dispatch(decrease())});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);


export default CounterContainer;
