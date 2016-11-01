function sum(currentState, action) {
    var DEFAULT_STATE = 3;
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type){
        case 'SUM':
            console.log('SUM');
            nextState = parseInt(action.a) + parseInt(action.b);
            funWithError();
            return nextState;
        default:
            console.log('default of Sum.js');
            console.log('currentState, ', currentState);
            nextState = currentState;
            return nextState;
    }
}

function funWithError() {
    throw Error('an error from sum');
}