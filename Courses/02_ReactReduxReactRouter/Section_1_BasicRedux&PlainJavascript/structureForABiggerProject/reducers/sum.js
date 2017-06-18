function Sum(currentState, action) {
    var getParams = this.getParams();
    var DEFAULT_STATE = parseInt(getParams.a) + parseInt(getParams.b);

    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type){
        case 'SUM':
            nextState = parseInt(action.a) + parseInt(action.b);
            console.log(nextState);
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}