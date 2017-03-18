import React, {PropTypes} from 'react';
import {setVisibilityFilter} from '../actions/index';
import {connect} from 'react-redux';

const Link = ({active, children, onClick}) => {
	if(active){
		return <span>{children}</span>
	}

	return (
		<a href='javascript:;'
			onClick = {e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default connect(
	(state, ownProps) => (
		{
			active: state.visibilityFilter === ownProps.filter
		}
	),
	(dispatch, ownProps) => (
			{
				onClick: () => {
					console.log('ownProps.filter: ', ownProps.filter);
					dispatch(setVisibilityFilter(ownProps.filter))
				}
			}			
	)
)(Link);