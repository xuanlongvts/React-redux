'use strict';
import { combineReducers } from 'redux';
import { booksReducers } from './booksReducers';
import { cartsReducers } from './cartsReducers';

export default combineReducers({
    books: booksReducers,
    carts: cartsReducers
})