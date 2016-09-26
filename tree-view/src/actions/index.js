export const INCREMENT = 'INCREMENT';
export const CREATE_NODE = 'CREATE_NODE';
export const DELETE_NODE = 'DELETE_NODE';
export const ADD_CHILD = 'ADD_CHILD';
export const REMOVE_CHILD = 'REMOVE_CHILD';

export function increment(nodeld) {
    return {
        type: INCREMENT,
        nodeld
    }
}

let nextld = 0;
export function createNode() {
    return{
        type: CREATE_NODE,
        nodeld: `new_${nextld++}`
    }
}

export function deleteNode(nodeld) {
    return {
        type: DELETE_NODE,
        nodeld
    }
}

export function addChild(nodeld, childld) {
    return{
        type: ADD_CHILD,
        nodeld,
        childld
    }
}

export function removeChild(nodeld, childld) {
    return{
        type: REMOVE_CHILD,
        nodeld,
        childld
    }
}