function counter(currentState, action) {
    var DEFAULT_STATE = 0;
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type){
        case 'DECREMENT':
            console.log('DECREMENT');
            nextState = currentState - 1;
            return nextState;
        case 'INCREMENT':
            console.log('INCREMENT');
            nextState = currentState + 1;
            return nextState;
        default:
            console.log('default of counter.js');
            console.log('currentState, ', currentState);
            nextState = currentState;
            return nextState;
    }
}