const logger = function (store) {
    return function (next) {
        return function (action) {
            console.group('logger');
            console.log('currentState == ', store.getState());
            console.log('next(action) // action == ', action);
            next(action);
            console.log('nextState == ', store.getState());
            console.groupEnd('logger');
        }
    }
};

const crashReporter = function (store) {
    return function (next) {
        return function (action) {
            try{
                next(action);
            }
            catch (err){
                console.group('crashReporter');
                console.error('error happen with action ==', action);
                console.error(err);
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