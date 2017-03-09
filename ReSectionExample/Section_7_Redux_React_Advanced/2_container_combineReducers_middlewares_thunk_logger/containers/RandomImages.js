import RandomImages from '../components/RandomImages';
import {connect} from 'react-redux';
import {getRandomImages} from '../redux/actions/index';

const mapStateToProps = (state) => ({
	images: state.images
});

const mapDispatchToProps = (dispatch) => ({
	onRandomImages: () => dispatch(getRandomImages)
});

const RandomImagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RandomImages);

export default RandomImagesContainer;
