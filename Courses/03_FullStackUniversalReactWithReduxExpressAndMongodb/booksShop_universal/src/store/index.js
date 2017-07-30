'use strict';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from '../reducers/index';

const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(reducers, window.INITIAL_STATE, middleware);

export default store;