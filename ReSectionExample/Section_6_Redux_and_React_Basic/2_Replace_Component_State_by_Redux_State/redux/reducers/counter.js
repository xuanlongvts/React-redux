export default function counter(state = {result: 0, loading: false, decrease: 'none'}, action){
	switch(action.type){
		case 'DECREMENT':
			return Object.assign({}, state, {
					result: state.result - 1,
					decrease: 'Click "decrease" button'
				}
			);
		case 'INCREMENT':
			return Object.assign({}, state, {result: state.result + 1});
		case 'INCREMENT_LOADING':
			return Object.assign({}, state, {loading: true});
		case 'DECREMENT_LOADING':
			return Object.assign({}, state, {loading: true});
		default:
			return state;
	}
}
