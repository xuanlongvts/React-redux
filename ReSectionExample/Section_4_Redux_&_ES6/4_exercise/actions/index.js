var decrease = () => ({
	type: 'DECREMENT'
})

var increase = () => ({
	type: 'INCREMENT'
})

var getSum = (a,b) => ({
	type: 'SUM',
	a: a,
	b: b
})

var asyncIncrease = (dispatch, state) => {
	dispatch({
		type: 'INCREMENT_LOADING'
	});

	_fakeServerApi.increaseCount(state.count.result, () =>
		dispatch({
			type: 'INCREMENT'
		})
	);
}

var asyncDecrease = (dispatch, state) => {
	dispatch({
		type: 'DECREAMENT_LOADING'
	});

	_fakeServerApi.decreaseCount(state.count.result, () =>
		dispatch({
			type: 'DECREMENT'
		})
	);
}

var getRandomImages = (dispatch, state) => {
	dispatch({
		type: 'IMAGES_LOADING'
	});

	var imgUrlApi = 'https://api.imgur.com/3/gallery/random/random/1';

	$.getJSON(imgUrlApi).done((data) => {
		dispatch({
			type: 'IMAGES',
			data: data
		})
	});
}
