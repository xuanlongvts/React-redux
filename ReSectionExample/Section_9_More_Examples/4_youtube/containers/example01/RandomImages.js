import React, { Component } from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import {getRandomImages} from '../../redux/actions/index';

class RandomImage extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const {images: {loading, data}, onRandomImages} = this.props;
		return(
			<div>
		                <button onClick={onRandomImages}>
		                    Random Images >
		                </button><br />
		                CountStatus:
		                <span style={{color: 'blue'}}>
		                    {loading}
		                </span>
		                <ImageList images={data} />
		            </div>
		)
	}
}

function ImageList(props) {
    return(
        <div>
            {
                props.images.map(
                    (image) =>
                    <img key={image.id} src={image.link} style={{height: '200px'}} />
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
	images: state.examples.images
});

const mapDispatchToProps = (dispatch) => ({
	onRandomImages: () => dispatch(getRandomImages)
});

const RandomImagesContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RandomImage);

export default RandomImagesContainer;
