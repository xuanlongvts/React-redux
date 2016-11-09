function images(currentState, aciton) {
    var DEFAULT_STATE = {
        data: [],
        loading: 'Please click the "Random Images" button'
    };
    var nextState = Object.assign({}, currentState);
    if(currentState === undefined){
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch(aciton.type){
        case 'IMAGES':
            nextState.data = aciton.data;
            nextState.loading = "loaded";
            return nextState;
        case 'IMAGES_LOADING':
            nextState.loading = "loading...";
            return nextState;
        default:
            nextState = currentState;
            return nextState;
    }
}