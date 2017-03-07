const DEFAULT_VALUES = {
	data: [],
	loading: 'Please click the "Random Images" button'
}
export default function images(state = DEFAULT_VALUES, action){
	switch(action.type){
		case 'IMAGES':
			return Object.assign({}, state, {
				data: data.data,
				loading: 'loaded'
			});
		case 'IMAGES_LOADING':
			return Object.assign({}, state, {
				loading: 'loading...'
			});
		default:
			return state;
	}
}
