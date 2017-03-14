const DEFAULT_VALUES = {
	data: [],
	loading: 'Please click the "Random Images" button'
}
export default function images(state = DEFAULT_VALUES, action){
	switch(action.type){
		case 'IMAGES':
			return  {...state,
				data: action.data,
				loading: 'loaded'
			};
		case 'IMAGES_LOADING':
			return {...state,
				loading: 'loading...'
			};
		default:
			return state;
	}
}
