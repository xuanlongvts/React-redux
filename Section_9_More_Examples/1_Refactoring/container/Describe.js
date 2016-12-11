import Describe from '../components/Describe';
import {connect} from 'react-redux';
import {decrease} from '../redux/actions/index';

const DescribeContainer = connect(
    (state, ownProps) => ({
        desc: state.count.decrease
    })
)(Describe);

export default DescribeContainer;