'use strict';
import axios from 'axios';

export const getCart = () => {
    return dispatch => {
        axios.get('/api/cart')
            .then(response => {
                dispatch({
                    type: 'GET_CART',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'GET_CART_REJECTED',
                    error: 'error when getting cart from session'
                })
            });
    }
}

export const addToCart = cart => {
    return dispatch => {
        axios.post('/api/cart', cart)
            .then(response => {
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'ADD_TO_CART_REJECTED',
                    error: 'error when adding to cart'
                })
            });
    }
}

export const deleteCartItem = (idCart, cart) => {

    const currentCartToDelete = cart;
    const indexToDelete = currentCartToDelete.findIndex(
        cart => {
            return cart._id === idCart
        }
    );
    let newCartDelete = [
        ...currentCartToDelete.slice(0, indexToDelete),
        ...currentCartToDelete.slice(indexToDelete + 1)
    ];

    return dispatch => {
        axios.post('/api/cart', newCartDelete)
            .then(response => {
                dispatch({
                    type: 'DELETE_CART_ITEM',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'DELETE_CART_ITEM_REJECTED',
                    error: 'error when deleting an item from cart'
                })
            });
    }
}

export const updateCartItem = (id, unit, cart) => {
    const currentCartToUpdate = cart;
    const indexToUpdate = currentCartToUpdate.findIndex(
        cart => {
            return cart._id === id
        }
    );
    
    const newCartToUpdate = {
        ...currentCartToUpdate[indexToUpdate],
        quantity: currentCartToUpdate[indexToUpdate].quantity + unit
    };
    let newCartUpdate = [
        ...currentCartToUpdate.slice(0, indexToUpdate),
        newCartToUpdate,
        ...currentCartToUpdate.slice(indexToUpdate + 1)
    ];

    return dispatch => {
        axios.post('/api/cart', newCartUpdate)
            .then(response => {
                dispatch({
                    type: 'UPDATE_CART_ITEM',
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: 'UPDATE_CART_ITEM_REJECTED',
                    error: 'error when updating to cart'
                })
            });
    }
}