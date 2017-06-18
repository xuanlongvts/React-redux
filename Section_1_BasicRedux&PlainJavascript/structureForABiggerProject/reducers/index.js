function combineReducer(currentState, action) {
    /*var DEFAULT_STATE = {
        count: 0,
        sum: 3
    };*/
    var nextState = Object.assign({}, currentState);
    console.log('nextState: ', nextState);
    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    };
    return nextState;
}