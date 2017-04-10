import * as types from '../actions/index';

const childIds = (state, action) => {
	switch (action.type){
		case types.ADD_CHILD:
			return [...state, action.childId];
		case types.REMOVE_CHILD:
			return state.filter(id => id !== action.childId);
		default:
			return state;
	}
}

const node = (state, action) => {
	switch (action.type){
		case types.CREATE_NODE:
			return {
				id: action.nodeId,
				counter: 0,
				childIds: []
			}
		case types.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}
		case types.ADD_CHILD:
		case types.REMOVE_CHILD:
			return {
				...state,
				childIds: childIds(state.childIds, action)
			}
		default:
			return state;
	}
}

const getAllDescendantIds = (state, nodeId) => (
	state[nodeId].childIds.reduce((acc, childId) => (
		[...acc, childId, ...getAllDescendantIds(state, childId)]
	), [])
);

const deleteMany = (state, ids) => {
	ids.forEach(id => delete state[id]);
	return state;
}

export default (state = {}, action) => {
	const {nodeId} = action;

	if(typeof nodeId === 'undefined'){
		return state;
	}

	if(action.type === types.DELETE_NODE){
		const descendantIds = getAllDescendantIds(state, nodeId);
		return deleteMany(state, [nodeId, ...descendantIds]);
	}

	return{
		...state,
		[nodeId]: node(state[nodeId], action)
	}
}