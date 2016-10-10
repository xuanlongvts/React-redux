const logger = function (store) {
    return function (next) {
        return function (action) {
            next(action);
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
                console.log(err);
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