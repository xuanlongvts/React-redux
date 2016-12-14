let nextTodold = 0;

export const addTodo = (text) => {
    return{
        type: 'ADD_TODO',
        id: nextTodold++,
        text
    }
};

export const setTodoFilter = (filter) => {
    return{
        type: 'SET_TODOS_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return{
        type: 'TOGGLE_TODO',
        id
    }
};