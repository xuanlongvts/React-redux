var decrease = function () {
    console.log('decrease');
    return {
        type: 'DECREMENT'
    };
};

var increase = function () {
    console.log('increase');
    return {
        type: 'INCREMENT'
    };
};

var getSum = function (a, b) {
    console.log('getSum');
    return {
        type: 'SUM',
        a: a,
        b: b
    };
};

var asyncIncrease = function (dispatch, state) {
    console.log('asynIncrease');
    _fakeServerApi.increaseCount(store.getState().count.result, function ( ) {
        store.dispatch({
            type: 'INCREMENT'
        });
    })
};