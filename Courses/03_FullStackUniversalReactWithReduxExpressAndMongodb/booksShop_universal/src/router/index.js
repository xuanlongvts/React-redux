'use strict';
import React from 'react';
import {
    Router, Route, IndexRoute, browserHistory
} from 'react-router';

import BooksForm from '../components/pages/booksForm';
import BooksList from '../components/pages/booksList';
import Cart from '../components/pages/cart';
import NotFound from '../components/pages/NotFound';
import Main from './Main';

const RoutesApp = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BooksList}/>
            <Route path="/admin" component={BooksForm}/>
            <Route path="/yourcart" component={Cart} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default RoutesApp;