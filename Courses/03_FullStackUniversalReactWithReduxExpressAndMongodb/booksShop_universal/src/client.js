'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

const initialState = window.INITIAL_STATE;
import store from './store/index';
import RoutesApp from './router/index';

render(
    <Provider store={store}>
        {RoutesApp}
    </Provider>,
    document.getElementById('app')
);
