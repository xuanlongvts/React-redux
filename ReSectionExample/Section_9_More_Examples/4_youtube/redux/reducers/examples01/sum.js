export default function sum(state = {result: 3, sumStatus: ''}, action){
	switch (action.type){
		case 'SUM':
			console.log('SUM');
			return {
				...state,
				result: parseInt(action.a) + parseInt(action.b),
				sumStatus: 'Click "Sum" button'
			};
			// return Object.assign({}, state, {
			// 	result: parseInt(action.a) + parseInt(action.b),
			// 	sumStatus: 'Click "Sum" button'
			// });
		default:
			return state;
	}
}
