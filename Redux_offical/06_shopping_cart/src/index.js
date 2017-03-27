import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import {getAllProducts} from './actions/index';

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production'){
	middleware.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

render(
	<Provider store={store}>
		<div>aaa</div>
	</Provider>,
	document.getElementById('root')
)