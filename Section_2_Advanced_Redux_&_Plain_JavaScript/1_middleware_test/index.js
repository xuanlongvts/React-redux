var logger = function (store) {
    return function (next) {
        return function (action) {
            console.group('logger');
            console.log('currentState == ', store.getState());
            console.info('next(action) // action == ', action);
            next(action);
            console.log('currentState == ', store.getState());
            console.groupEnd('logger');
        }
    }
};

const crashReporter = function (store) {
    return function (next) {
        return  function (action) {
            try{
                next(action);
            }catch(err){
                console.group('crashReporter');
                console.error('error happen with action: ', action);
                console.groupEnd('crashReporter');
            }
        }
    }
};

const thunk = function (store) {
    return function (next) {
        return function (action) {
            if(typeof action === 'function'){
                action(store.dispatch, store.getState());
            }
            else{
                next(action);
            }
        }
    }
};

var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('value2').innerHTML = state.sum;
}

store.subscribe(render);
render();