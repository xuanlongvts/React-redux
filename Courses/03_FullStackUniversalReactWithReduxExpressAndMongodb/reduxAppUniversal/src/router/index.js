'use strict';
import React from 'react';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/index';

import BooksForm from '../components/pages/booksForm';
import BooksList from '../components/pages/booksList';
import Cart from '../components/pages/cart';
import Menu from '../components/menu';
import Footer from '../components/footer';

const RoutesApp = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={BooksList} />
                    <Route path="/admin" component={BooksForm} />
                    <Route path="/yourcart" component={Cart} />
                </Switch>
                <Footer />
            </div>   
        </BrowserRouter>
    </Provider>
);

export default RoutesApp;