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
    _fakeServerApi.increaseCount(state.count.result, function ( ) {
        dispatch({
            type: 'INCREMENT'
        });
    });
};