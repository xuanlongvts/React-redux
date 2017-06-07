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
					...normalize(camelizedJson, schema)
				}
			})
		)
}

const userSchema = new schema.Entity('users', {}, {
	idAtribute: user => user.login.toLowerCase()
})

export const Schemas = {
	USER: userSchema
}


export const CALL_API = 'Cal API';