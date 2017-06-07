import * as ActionTypes from '../actions/index';
import {combineReducers} from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const errMessage = (state = null, action) => {
	const {type, error} = action;

	if(type === ActionTypes.RESET_ERROR_MESSAGE){
		return null
	}
	else if(error){
		return error;
	}

	return state;
}

const rootReducer = combineReducers({
	errMessage,
	routing
});

export default rootReducer;