import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

var defaultState = {
    todo: {
        items: []
    }
};

function addTodo(message) {
    return {
        type: 'ADD_TODO',
        message: message,
        completed: false
    };
}

function completeTodo(index) {
    return {
        type: 'COMPLETE_TODO',
        index: index
    };
}

function deleteTodo(index) {
    return {
        type: 'DELETE_TODO',
        index: index
    }
}

function clearTodo() {
    return {
        type: 'CLEAR_TODO'
    };
}

