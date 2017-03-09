export default function counter(state = {result: 0, loading: false, decrease: 'none'}, action){
	switch(action.type){
		case 'DECREMENT':
			return  {...state,
					result: state.result - 1,
					decrease: 'Click "decrease" button'
				}
		case 'INCREMENT':
			return {...state, result: state.result + 1};
		case 'INCREMENT_LOADING':
			return {...state, loading: true};
		case 'DECREMENT_LOADING':
			return {...state, loading: true};
		default:
			return state;
	}
}
