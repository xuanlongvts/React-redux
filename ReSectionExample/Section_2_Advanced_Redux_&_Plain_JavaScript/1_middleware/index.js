var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render(){
	var state = store.getState();

	document.getElementById('value').innerHTML = state.count.result;
	document.getElementById('value2').innerHTML = state.sum;

	var getStatus = document.getElementById('status');

	if(state.count.loading){
		getStatus.innerHTML = 'is loading...';
	}
	else{
		getStatus.innerHTML = 'loaded';
	}
}

render();
store.subscribe(render);
