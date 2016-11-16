function images(state = { data: [], loading: 'Please click the "Random Images" button' }, aciton) {
    switch(aciton.type){
        case 'IMAGES':
            return Object.assign({}, state, {
                data: aciton.data,
                loading: "loaded"
            });
        case 'IMAGES_LOADING':
            return Object.assign({}, state, {
                loading: "loading..."
            });
        default:
            return state;
    }
}