function counter(currentState, action) {
    DEFAULT_STATE = 0;

    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type){
        case 'DECREMENT':
            nextState = currentState - 1;
            return nextState;
        case 'INCREMENT':
            nextState = currentState + 1;
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}

function sum(currentState, action) {
    var DEFAULT_STATE = 3;

    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type){
        case 'SUM':
            nextState = parseInt(action.a) + parseInt(action.b);
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}

function combineReducer(currentState, action) {
    var DEFAULT_STATE = {
        count: 0,
        sum: 3
    };
    var nextState = Object.assign({}, currentState);
    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    };
    return nextState;
}