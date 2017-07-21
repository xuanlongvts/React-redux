'use strict';

const INIT_STATE = {
    cart: []
}

export function cartsReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':  
            return {
                ...state,
                cart: [
                    ...action.payload,
                    ...state.cart
                ]
            }
        case 'DELETE_CART_ITEM':
            const currentCartToDelete = state.cart;
            const indexToDelete = currentCartToDelete.findIndex(
                cart => {
                    return cart.id === action.payload
                }
            );
            return {
                ...state,
                cart: [
                    ...currentCartToDelete.slice(0, indexToDelete),
                    ...currentCartToDelete.slice(indexToDelete + 1)
                ]
            };
        case 'UPDATE_CART_ITEM':
            const { id, unit } = action;
            const currentCartToUpdate = state.cart;
            const indexToUpdate = currentCartToUpdate.findIndex(
                cart => {
                    return cart.id === id
                }
            );
            
            const newCartToUpdate = {
                ...currentCartToUpdate[indexToUpdate],
                quality: currentCartToUpdate[indexToUpdate].quality + unit
            }

            return {
                ...state,
                cart: [
                    ...currentCartToUpdate.slice(0, indexToUpdate),
                    newCartToUpdate,
                    ...currentCartToUpdate.slice(indexToUpdate + 1)
                ]
            }
        default:
            return state;
    }
}