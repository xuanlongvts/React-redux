import React, {Component} from 'react';
import {connect} from 'react-redux';

class Video extends Component{
	render(){
		const {props: {video}} = this;
		console.log('video: ', video);
		if(!video){
			return <div></div>;
		}
		const {id: {videoId}} = video;

		return(
			<p><br />
				 <iframe width="480" height="270" frameBorder="0" allowFullScreen
				 	src={`https://www.youtube.com/embed/${videoId}`}
                			>
                			</iframe>
			</p>
		)
	}
}

export default connect((state) => (
		{ video: state.youtube.video }
	),
	null
)(Video);
