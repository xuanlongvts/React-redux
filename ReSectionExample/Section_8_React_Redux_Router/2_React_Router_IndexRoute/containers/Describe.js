import Describe from '../components/Describe';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
	status: state.count.decrease
})

const DecribeContainer = connect(
	mapStateToProps
)(Describe);

export default DecribeContainer;
