import RandomImages from '../components/RandomImages';
import {connect} from 'react-redux';
import {getRandomImages} from '../redux/actions/index';

const RandomImagesContainer = connect(
    (state, ownProps) => ({
        images: state.images
    }),
    {
        onRandomImages: () => getRandomImages
    }
)(RandomImages);

export default RandomImagesContainer;