import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import 'todomvc-app-css/index.css';
import App from './containers/App';
import reducer from './reducers/index';
import createLogger from 'redux-logger';

const store = createStore(reducer, {}, compose(
	applyMiddleware(createLogger()),
	window.devToolsExtension?window.devToolsExtension():f=>f
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
