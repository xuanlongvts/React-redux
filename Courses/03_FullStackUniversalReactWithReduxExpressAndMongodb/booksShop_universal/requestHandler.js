'use strict';
import axios from 'axios';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import reducers from './src/reducers/index';
import RoutesApp from './src/router/index';

function handleRender(req, res) {
    axios.get('http://localhost:3001/books')
        .then(function (response) {
            var myHTML = JSON.stringify(response.data);
            res.render('index', { myHTML });

            // Step-1: Create a redux store on the server
            // const store = createStore(reducers, {
            //     "books": {
            //         "books": response.data
            //     }
            // });
            // // Step-2: Get initial state from the store
            // const initialState = JSON.stringify(store.getState()).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
            // // Step-3: Implement react-router on the server to intercept client request and define what to do with them
            // const Routes = {
            //     routes: RoutesApp,
            //     location: req.url
            // }
            // match(Routes, function (err, redirect, props) {
            //     if (err) {
            //         res.status(500).send('Error fullfiling the request');
            //     }
            //     else if (redirect) {
            //         res.status(302, redirect.pathname + redirect.search);
            //     }
            //     else if (props) {
            //         const reactComponent = renderToString(
            //             <Provider store={store}>
            //                 <RouterContext {...props} />
            //             </Provider>
            //         );
            //         res.status(200).render('index', {
            //             reactComponent, initialState
            //         });              
            //     }
            //     else {
            //         res.status(404).send("Not found");
            //     }
            // })
        })
        .catch(function (err) {
            console.error('#Initial Server-side rendering error: ', err);
        });
}

module.exports = handleRender;