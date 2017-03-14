export const crashReporter = () => next => action => {
	try{
		next(action);
	}
	catch(err){
		console.log(err);
	}
}
