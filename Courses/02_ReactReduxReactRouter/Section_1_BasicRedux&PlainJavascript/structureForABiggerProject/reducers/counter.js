function Counter(currentState, action) {
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
            console.log('counter', nextState);
            return nextState;
    }
}