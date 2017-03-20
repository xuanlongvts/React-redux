import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

/*const store = createStore(reducer, {}, compose(
	applyMiddleware(createLogger(), thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
	)
);*/

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);