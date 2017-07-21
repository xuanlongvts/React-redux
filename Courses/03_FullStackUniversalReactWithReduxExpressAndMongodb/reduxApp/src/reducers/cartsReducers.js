'use strict';

const INIT_STATE = {
    cart: []
}

export function cartsReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let newCartAdd = [
                ...action.payload,
                ...state.cart
            ];
            return {
                ...state,
                cart: newCartAdd,
                totalAmount: totalMoney(newCartAdd).amount,
                totalQuantity: totalMoney(newCartAdd).totalQuantity
            }
        case 'DELETE_CART_ITEM':
            const currentCartToDelete = state.cart;
            const indexToDelete = currentCartToDelete.findIndex(
                cart => {
                    return cart.id === action.payload
                }
            );
            let newCartDelete = [
                ...currentCartToDelete.slice(0, indexToDelete),
                ...currentCartToDelete.slice(indexToDelete + 1)
            ];
            return {
                ...state,
                cart: newCartDelete,
                totalAmount: totalMoney(newCartDelete).amount,
                totalQuantity: totalMoney(newCartDelete).totalQuantity
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
                quantity: currentCartToUpdate[indexToUpdate].quantity + unit
            };
            let newCartUpdate = [
                ...currentCartToUpdate.slice(0, indexToUpdate),
                newCartToUpdate,
                ...currentCartToUpdate.slice(indexToUpdate + 1)
            ];
            return {
                ...state,
                cart: newCartUpdate,
                totalAmount: totalMoney(newCartUpdate).amount,
                totalQuantity: totalMoney(newCartUpdate).totalQuantity
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