var store = Redux.createStore(combineReducer);

function render(){
	var state = store.getState();
	
	document.getElementById('value').innerHTML = state.count;
	document.getElementById('value2').innerHTML = state.sum;
}

render();
store.subscribe(render);