import React, {Component} from 'react';
import AddTodo from '../container/todos/AddTodo';
import TodosList from '../container/todos/TodosList';
import FiltersList from '../container/todos/FiltersList';

export default class Todos extends Component{
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <AddTodo/>
                <TodosList />
                <FiltersList />
            </div>
        )
    }
}