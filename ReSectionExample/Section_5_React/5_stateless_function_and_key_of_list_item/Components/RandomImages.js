import React, {Component} from 'react';
import $ from 'jquery';

export default class RandomImages extends Component{
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: 'Please click the "Random Images" button'
		}
		this.randomImages = this.randomImages.bind(this);
	}


	randomImages(){
		let _this = this;
		this.setState({
			loading: 'loading...'
		});

		var imgUrlApi = 'https://api.imgur.com/3/gallery/random/random/1';

		$.getJSON(imgUrlApi).done(data => {
			console.log('data: ', data);
			_this.setState({
				data: data.data,
				loading: 'loaded'
			});
		});
	}

	render() {
		return(
			<div>
				<button onClick={this.randomImages}>
					Random Images >
				</button><br />
				CountState:
				<span style={{color: 'blue'}}>
					{this.state.loading}
				</span>
				<ImageList images={this.state.data} />
			</div>
		)
	}
}

function ImageList(props){
	return(
		<div>
			{
				props.images.map(
					(image) => <img key={image.id} src={image.link} style = {{height: '200px'}} />
				)
			}
		</div>
	)
}
