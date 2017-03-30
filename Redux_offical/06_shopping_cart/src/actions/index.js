import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

export const getAllProducts = (dispatch) => {
	shop.getProducts(products => {
		dispatch({
			type: types.RECEIVE_PRODUCTS,
			products: products
		})
	})
}

export const addToCart = productId => (dispatch, getState) => {
	if(getState().products.byId[productId].inventory > 0){
		dispatch({
			type: types.ADD_TO_CART,
			productId
		})
	}
}

export const checkout = products => (dispatch, getState) => {
	const {cart} = getState();

	dispatch({
		type: types.CHECKOUT_REQUEST
	});

	shop.buyProducts(products, () => {
		dispatch({
			type: types.CHECKOUT_SUCCESS,
			cart 
		})
	})
}