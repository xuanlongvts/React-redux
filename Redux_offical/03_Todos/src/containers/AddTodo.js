import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch}) => {
    let input;

    return(
        <form>
            <input type="text" />
            &nbsp;&nbsp;
            <button type="submit">Add Todo</button>
        </form>
    )
};

export default AddTodo;