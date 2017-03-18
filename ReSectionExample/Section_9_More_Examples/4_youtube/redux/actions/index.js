import $ from 'jquery';

export const decrease = () => ({
	type: 'DECREMENT'
});

export const increase = () => ({
	type: 'INCREMENT'
});

export const getSum = (a,b) => ({
	type: 'SUM',
	a,
	b
});

export const asyncIncrease = (dispatch, state) => {
	dispatch({
		type: 'INCREMENT_LOADING'
	});
}

export const getRandomImages = (dispatch, state) => {
	dispatch({
		type: 'IMAGES_LOADING'
	});

	var imgurAPI = 'https://api.imgur.com/3/gallery/random/random/1';
		$.getJSON(imgurAPI).done(data =>
		dispatch({
			type: 'IMAGES',
			data: data.data
		})
	);
};
