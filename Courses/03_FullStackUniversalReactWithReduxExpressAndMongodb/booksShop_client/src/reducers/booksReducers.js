'use strict';

var INIT_STATE = {
    books: []
};

export function booksReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'GET_BOOK':  
            return {
                ...state,
                books: [...action.payload]
            }    
        case 'POST_BOOK':
            return {
                ...state,
                books: [
                    ...state.books,
                    ...action.payload
                ]
            }
        case 'DELETE_BOOK':
            const currentBookToDelete = state.books;
            const indexToDelete = currentBookToDelete.findIndex(
                function (book) {
                    return book._id === action.payload;
                }
            );
            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            };
        case 'UPDATE_BOOK':
            const { title, price } = action.payload;

            const currentBookToUpdate = state.books;
            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book._id === action.payload;
                }
            );
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: title,
                price: price
            }
            return {
                books: [
                    ...currentBookToUpdate.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookToUpdate.slice(indexToUpdate + 1)
                ]
            }
        default:
            return state;    
    }
}