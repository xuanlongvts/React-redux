'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions.js';
import reducers from './reducers/index';

import BooksList from './components/pages/booksList';

// Step 1 create the store
const middleware = applyMiddleware(createLogger());
const store = createStore(reducers, middleware);

render(
    <Provider store={store}>
        <BooksList />
    </Provider>,
    document.getElementById('app')
);
