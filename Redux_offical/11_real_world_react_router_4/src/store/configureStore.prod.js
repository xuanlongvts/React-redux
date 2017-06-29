import {createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const configureStore = () => createStore(
	rootReducer
);

export default configureStore;