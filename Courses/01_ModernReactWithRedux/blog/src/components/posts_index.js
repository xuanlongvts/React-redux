import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostIndex extends Component{

	componentWillMount() {
		this.props.fetchPosts();
	}

	render(){
		let listData = this.props.posts;
		return(
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{listData && listData.map(post => (
						<li className="list-group-item" key={post.id}>
							<Link to={"posts/" + post.id}>
								<span className="pull-xs-right">
									{post.categories}
								</span>{" "}
								<strong>{post.title}</strong>
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	posts: state.posts.all
})

export default connect(
	mapStateToProps, 
	{fetchPosts}
)(PostIndex)

