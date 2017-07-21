'use strict';

export function addToCart(book) {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}

export function deleteCartItem(idCart) {
    return {
        type: 'DELETE_CART_ITEM',
        payload: idCart
    }
}

export function updateCartItem(id, unit) {
    return {
        type: 'UPDATE_CART_ITEM',
        id,
        unit
    }
}