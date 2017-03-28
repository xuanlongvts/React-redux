import React, {PropTypes} from 'react';

const Product = ({price, quantity, title}) => (
	<div>
		{title} -  &#36;{price} {quantity ? `${quantity}` : null}
	</div>
);

Product.propTyes = {
	price: PropTypes.number,
	quantity: PropTypes.number,
	title: PropTypes.string
}

export default Product;