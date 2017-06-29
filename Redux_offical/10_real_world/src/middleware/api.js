import {normalize, schema} from 'normalizr';
import {camelizeKeys} from 'humps';

const API_ROOT = 'https://api.github.com/';
const callApi = (endPoint, schema) => {
	const fullUrl = (endPoint.indexOf(API_ROOT) === -1) ? API_ROOT + endPoint : endPoint;

	return fetch(fullUrl)
		.then(response =>
			response.json().then(json => {
				if(!response.ok){
					return Promise.reject(json);
				}

				const camelizedJson = camelizeKeys(json);

				return {
					...camelizedJson
				}
			})
		)
}

export const CALL_API = 'Cal API';

export default store => next => action => {

	const callAPI = action[CALL_API];
	if (typeof callAPI === 'undefined') {
		return next(action);
	}
	
	let { endpoint } = callAPI;
	const { schema, types } = callAPI;

	const [requestType, successType, failureType] = types;

	const actionWith = data => {
		const finalAction = Object.assign({}, action, data);
		delete finalAction[CALL_API];
		return finalAction;
	}

	next(actionWith({ type: requestType }));

	return callApi(endpoint, schema).then(
		response => {
			return next(actionWith({
				response,
				type: successType
			}));
		},
		err => {
			return next(actionWith({
				error: err.message || 'Something bad happend',
				type: failureType
			}));
		}
	)
}