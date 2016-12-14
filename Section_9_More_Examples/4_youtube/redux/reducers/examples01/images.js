export default function images(state = { data: [], loading: 'Please click the "Random Images" button' }, aciton) {
    switch(aciton.type){
        case 'IMAGES':
            return {...state, data: aciton.data, loading: "loaded"};
        case 'IMAGES_LOADING':
            return {...state, loading: "loading..."};
        default:
            return state;
    }
}