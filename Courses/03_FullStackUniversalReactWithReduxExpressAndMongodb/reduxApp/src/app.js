import { createStore } from 'redux';
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions.js';
import reducers from './reducers/index';

// Step 1 create the store
const store = createStore(reducers);
store.subscribe(function () {
    console.log('Current state is: ', store.getState());
    //console.log('Current price is: ', store.getState()[1].price);
});

// Step 2 create and dispatch actions
store.dispatch(postBooks(
    [
        {
            id: 1,
            title: 'This is the book title',
            description: 'Descripton book 1',
            price: 33.33
        },
        {
            id: 2,
            title: 'This is the book title 2',
            description: 'Descripton book 2',
            price: 66.66
        },
        {
            id: 3,
            title: 'This is the book title 3',
            description: 'Descripton book 3',
            price: 11.11
        }
    ]
));

store.dispatch(postBooks(
    [
        {
            id: 4,
            title: 'This is the book title 4',
            description: 'Descripton book 4',
            price: 99.99
        }
    ]
));

// Delete a book
store.dispatch(deleteBooks(
    {
        id: 3
    }
));

// Update a book
store.dispatch(updateBooks(
    {
        id: 2,
        title: 'Learn react in 24h',
        price: '10.000'
    }
));

store.dispatch(addToCart([{id: 1}]))
