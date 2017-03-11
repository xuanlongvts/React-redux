import Sum from '../components/Sum';
import {connect} from 'react-redux';
import {getSum} from '../redux/actions/index';

const mapStateToProps = (state) => (
	{
		sum: state.sum
	}
);

const mapDispatchToProps = (dispatch) => ({
		onSum: (a,b) => dispatch(getSum(a,b))
	}
)

const SumContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sum);

export default SumContainer;
