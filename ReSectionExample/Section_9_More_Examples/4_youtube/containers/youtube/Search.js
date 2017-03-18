import React, {Component} from 'react';
import {connect} from 'react-redux';
import {search} from '../../redux/actions/youtube';

class Search extends Component{

	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	render(){
		const onSetTerm = (e) => {
			e.preventDefault();
			this.props.onSearch(this.state.term);
		}

		return(
			<div>
				<form onSubmit={onSetTerm}>
					<input type='text' value = {this.state.term}
						onChange = {(e) => this.setState({term: e.target.value})}
					 />
					<button>
						Search
					</button>
				</form>
			</div>
		)
	}
}

export default connect(null,
	(dispatch) => (
		{
			onSearch: (term) => dispatch(search.bind(null, term))
		}
	)
)(Search);
