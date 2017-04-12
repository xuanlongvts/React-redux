import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectReddit, fetchPostsIfNeeded, invalidateReddit} from '../actions/index';
import Picker from '../components/Picker';

class App extends Component{

	static propTypes = {
		selectReddit: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired,
		lastUpdated: PropTypes.number,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const {dispatch, selectReddit} = this.props;
		dispatch(fetchPostsIfNeeded(selectReddit));
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.selectReddit !== this.props.selectReddit){
			const {dispatch, selectReddit} = nextProps;
			dispatch(fetchPostsIfNeeded(selectReddit));
		}
	}

	handleChange = nextReddit => {
		this.props.dispatch(selectReddit(nextReddit));
	}

	render(){
		const { selectReddit, posts, isFetching, lastUpdated } = this.props;
		const isEmpty = posts.length === 0;

		return(
			<div>
				<Picker 
					value={selectReddit}
					onChange={this.handleChange}
					options={['reactjs', 'frontend']}
				/>
				<p>
					{lastUpdated && 
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()} {' '}
						</span>
					}
					{!isFetching && 
						<a href="javascript:;">Refresh</a>
					}
				</p>
				{isEmpty ?
					(isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>) :
					<div style={{opacity: isFetching ? .5 : 1}}>
						aaa
					</div>
				}
			</div>
		)
	}
}

const mapStateProps = state => {
	const {selectedReddit, postsByReddit} = state;

	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsByReddit[selectedReddit] || {
		isFetching: true,
		items: []
	}

	return {
		selectReddit,
		posts,
		isFetching,
		lastUpdated
	}
}

export default connect(mapStateProps)(App);