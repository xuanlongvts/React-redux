import React, {PropTypes} from 'react';

const ProductList = ({title, children}) => (
	<div>
		<h3>{title}</h3>
		<div>{children}</div>
	</div>
)

ProductList.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string.isRequired
}

export default ProductList;