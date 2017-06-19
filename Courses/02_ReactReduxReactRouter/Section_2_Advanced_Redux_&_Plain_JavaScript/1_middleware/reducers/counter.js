function Counter(currentState, action){
	var DEFAULT_STATE = {
		result: 0,
		loading: false,
	};

	if(currentState === undefined){
		nextState = DEFAULT_STATE;
		return nextState;
	}

	var nextState = Object.assign({}, currentState);
	switch(action.type){
		case 'DECREMENT':
			nextState.result = currentState.result - 1;
			return nextState;
		case 'INCREMENT_LOADING':
			nextState.loading = true;
			return nextState;
		case 'INCREMENT':
			nextState.result = currentState.result + 1;
			nextState.loading = false;
			return nextState;
		default:
			return nextState;
	}
}