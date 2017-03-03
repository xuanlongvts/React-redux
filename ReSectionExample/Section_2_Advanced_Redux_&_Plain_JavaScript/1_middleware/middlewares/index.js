const logger = function(){
	return function(next){
		return function (action){
			console.log('logger');
			next(action);
		}
	}
}

const crashReporter = function(){
	return function(next){
		return function(action){
			try{
				console.log('crashReporter');
				next(action);
			}
			catch(err){
				console.log('err: ', err);
			}
		}
	}
}

const thunk = function(store){
	return function(next){
		return function(action){
			console.log('thunk');
			if(typeof action === 'function'){
				console.log('action = ', typeof action);
				action(store.dispatch, store.getState());
			}
			else{
				next(action);
			}
		}
	}
}
