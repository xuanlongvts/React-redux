'use strict';

const INIT_STATE = {
    cart: []
}

export function cartsReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'GET_CART':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totalMoney(action.payload).amount,
                totalQuantity: totalMoney(action.payload).totalQuantity
            }    
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totalMoney(action.payload).amount,
                totalQuantity: totalMoney(action.payload).totalQuantity
            }
        case 'DELETE_CART_ITEM':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totalMoney(action.payload).amount,
                totalQuantity: totalMoney(action.payload).totalQuantity
            };
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                cart: action.payload,
                totalAmount: totalMoney(action.payload).amount,
                totalQuantity: totalMoney(action.payload).totalQuantity
            }
        default:
            return state;
    }
}

export const totalMoney = shoppingCartArr => {
    const totalAmount = shoppingCartArr.map((item) =>
        item.price * item.quantity
    ).reduce((a, b) => a + b, 0);

    const totalQuantity = shoppingCartArr.map(item =>
        item.quantity
    ).reduce((a, b) => a + b, 0);

    return {
        amount: totalAmount,
        totalQuantity: totalQuantity
    }
}