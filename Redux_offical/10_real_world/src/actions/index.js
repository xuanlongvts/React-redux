import {CALL_API} from '../middleware/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';



export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const resetErrorMessage = () => ({
	type: RESET_ERROR_MESSAGE
});



const fetchUser = login => {
	return {
		[CALL_API]: {
			types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
			endpoint: `users/${login}`
		}
	}
};

export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {

	return dispatch(fetchUser(login));
}