'use strict';
import axios from 'axios';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './src/reducers/index';
import RoutesApp from './src/router/index';

function handleRender(req, res) {
    axios.get('http://localhost:3001/books')
        .then(function (response) {
            // var myHTML = JSON.stringify(response.data);
            // res.render('index', { myHTML });

            // STEP-1 CREATE A REDUX STORE ON THE SERVER
            const middleware = applyMiddleware(thunk);
            const store = createStore(
                reducers,
                { "books": { "books": response.data } },
                middleware
            );
            // STEP-2 GET INITIAL STATE FROM THE STORE
            const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
            // STEP-3 IMPLEMENT REACT-ROUTER ON THE SERVER TO INTERCEPT CLIENT REQUESTs AND DEFINE WHAT TO DO WITH THEM
            const Routes ={
                routes: RoutesApp,
                location: req.url
            }
            match(Routes, function (error, redirect, props) {
                if (error) {
                    res.status(500).send("Error fullfilling the request");
                } else if (redirect) {
                    res.status(302, redirect.pathname + redirect.search)
                } else if (props) {
                    const reactComponent = renderToString(
                        <Provider store={store}>
                            <RouterContext {...props} />
                        </Provider>
                    );
                    res.status(200).render('index', { reactComponent, initialState })
                } else {
                    res.status(404).send('Not Found')
                }
            });
        })
        .catch(function (err) {
            console.error('#Initial Server-side rendering error: ', err);
        });
}

module.exports = handleRender;