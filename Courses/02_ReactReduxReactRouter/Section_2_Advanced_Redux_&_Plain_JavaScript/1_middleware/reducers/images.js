function Images(currentState, action){
	var DEFAULT_STATE = {
		data: [],
		loading: 'Please click the "Random Images" button'
	}

	if(currentState === undefined){
		var nextState = DEFAULT_STATE;
		return nextState;
	}
	var nextState = Object.assign({}, currentState);

	switch(action.type){
		case 'IMAGES_LOADING':
			nextState.loading = 'loading...';
			return nextState;
		case 'IMAGES':
			nextState.data = action.data;
			nextState.loading = 'loaded';
			return nextState;
		default:
			return nextState;
	}
}