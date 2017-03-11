import React, { Component } from 'react';
import $ from 'jquery';

export default class RandomImage extends Component{
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
