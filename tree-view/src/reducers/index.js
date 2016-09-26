import { INCREMENT, ADD_CHILD, REMOVE_CHILD, CREATE_NODE, DELETE_NODE } from '../actions';

function childlds(state, action) {
    switch (action.type){
        case ADD_CHILD:
            return [...state, action.childld];
        case REMOVE_CHILD:
            return state.filter(id => id !== action.childld);
        default:
            return state;
    }
}

function node(state, action) {
    switch (action.type){
        case CREATE_NODE:
            return{
                id: action.nodeld,
                counter: 0,
                childlds: []
            };
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ADD_CHILD:
        case REMOVE_CHILD:
            return{
                ...state,
                childlds: childlds(state.childlds, action)
            };
        default:
            return state;
    }
}

function getAllDescendantlds(state, nodeld) {
    return state[nodeld].childlds.reduce((acc, childld) => (
        [...acc, childld, ...getAllDescendantlds(state, childld)]
    ), []);
}

function deleteMany(state, ids) {
    state = {...state};
    ids.forEach(id => delete state[id]);
    return state;
}

export default function (state = {}, action) {
    const {nodeld} = action;
    if(typeof nodeld === 'undefined'){
        return state;
    }

    if(action.type === DELETE_NODE){
        const descendantlds = getAllDescendantlds(state, nodeld);
        return deleteMany(state, [nodeld, ...descendantlds]);
    }

    return {
        ...state,
        nodeld: node(state[nodeld], action)
    }
}