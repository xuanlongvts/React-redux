var decrease = function(){
	return {
		type: 'DECREMENT'
	}
}

var increase = function(){
	return {
		type: 'INCREMENT'
	}
}

var getSum = function(a,b){
	return {
		type: 'SUM',
		a: a,
		b: b
	}
}

var asyncIncrease = function(dispatch, state){
	dispatch({
		type: 'INCREMENT_LOADING'
	});

	_fakeServerApi.increaseCount(state.count.result, function(){
		dispatch({
			type: 'INCREMENT'
		})
	})
}

var asyncDecrease = function(dispatch, state){
	dispatch({
		type: 'DECREAMENT_LOADING'
	});

	_fakeServerApi.decreaseCount(state.count.result, function(){
		dispatch({
			type: 'DECREMENT'
		})
	})
}

var getRandomImages = function(dispatch, state){
	dispatch({
		type: 'IMAGES_LOADING'
	});

	var imgUrlApi = 'https://api.imgur.com/3/gallery/random/random/1';

	$.getJSON(imgUrlApi).done(function(data){
		console.log('data: ', data);
		dispatch({
			type: 'IMAGES',
			data: data
		})
	})
}
