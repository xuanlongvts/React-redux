import React, {PropTypes} from 'react';

const ProductItem = ({product, onAddToCartClicked}) => (
	<div style={{marginBottom: 15}}>
		<div>
			{product.title} - &#36;{product.price}
		</div>
		<button
			onClick={onAddToCartClicked}
			disabled={product.inventory > 0 ? '' : 'disabled'}
		>
			{product.inventory > 0 ? 'Add to cart' : 'Sold out'}
		</button>
	</div>
)

ProductItem.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	}).isRequired,
	onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem;