import counter from './examples01/counter';
import images from './examples01/images';
import sum from './examples01/sum';

import todosList from './todos/todosList';
import todosFilter from './todos/todosFilter';

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

/*
export default function combineReducer(currentState, action) {
    var nextState = {...currentState};
    return {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action),
        images: images(nextState.images, action)
    };
}*/

export default combineReducers({
    examples: combineReducers({
        count: counter,
        sum,
        images
    }),
    todos: combineReducers({
        todosList,
        todosFilter
    }),
    routing: routerReducer
})