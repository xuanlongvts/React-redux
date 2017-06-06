import {combineReducers} from 'redux';
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
	state: (state = {}) => state,
	routing
});

export default rootReducer;