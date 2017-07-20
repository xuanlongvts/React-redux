'use strict';

const init_state = {
    cart: []
}

export function cartsReducers(state = init_state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':  
            return {
                cart: [
                    ...state.cart,
                    ...action.payload
                ]
            }
        default:
            return state;
    }
}