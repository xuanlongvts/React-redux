function images(currentState, action){
	var DEFAULT_STATE = {
		data: [],
		loading: 'Please cick the "Random Images" button'
	};

	var nextState =  Object.assign({}, currentState);

	if(currentState === undefined){
		nextState = DEFAULT_STATE;
		return nextState;
	}

	switch (action.type){
		case 'IMAGES':
			nextState.data = action.data;
			console.log('nextState.data: ', nextState.data);
			nextState.loading = 'loaded';
			return nextState;
		case 'IMAGES_LOADING':
			nextState.loading = 'loading...';
			return nextState;
		default:
			nextState = currentState;
			return nextState;

	}
}
