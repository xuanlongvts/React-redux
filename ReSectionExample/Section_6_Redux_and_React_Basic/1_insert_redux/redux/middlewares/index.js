export const logger = () => next => action => {
	next(action);
}

export const crashReporter = () => next => action => {
	try{
		next(action);
	}
	catch(err){
		console.log(err);
	}
}

export const thunk = store => next => action => {
	if(typeof action === 'function'){
		action(store.dispatch, store.getState());
	}
	else{
		next(action);
	}
}
