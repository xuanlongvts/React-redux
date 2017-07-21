'use strict';

var INIT_STATE = {
    books: [
        {
            id: 1,
            title: 'This is the book title 1',
            description: 'Descripton book 1',
            price: 100
        },
        {
            id: 2,
            title: 'This is the book title 2',
            description: 'Descripton book 2',
            price: 500
        },
        {
            id: 3,
            title: 'This is the book title 3',
            description: 'Descripton book 3',
            price: 900
        }
    ]
};

export function booksReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case 'GET_BOOK':
            return {
                ...state,
                books: [...state.books]
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
                    return book.id === action.payload.id;
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
                    return book.id === action.payload.id;
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