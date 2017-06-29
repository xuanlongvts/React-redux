import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import api from '../middleware/api';

const configureStore = () => createStore(
	rootReducer,
	applyMiddleware(thunk, api)
);

export default configureStore;