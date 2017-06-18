function getParams(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;

	return {
		a: a,
		b: b
	}
}

function combineReducer(currentState, action) {
    var nextState = Object.assign({}, currentState);
    
    nextState = {
        count: Counter(nextState.count, action),
        sum: Sum(nextState.sum, action)
    };
    return nextState;
}