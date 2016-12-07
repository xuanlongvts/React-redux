export default function counter(state = { result: 0, decrease: 'none', loading: false }, action) {

    switch (action.type){
        case 'DECREMENT':
            return {...state, result: state.result - 1, decrease: 'Click "decrease" button'};
        case 'INCREMENT':
            return {...state, result: state.result + 1, loading: false };
        case 'INCREMENT_LOADING':
            return {...state, loading: true };
        default:
            return state;
    }
}