import React from 'react';
import { TodoContext } from '../TodoContext';
import '../TodoCounter/TodoCounter.css';

function TodoCounter(){

    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    
    return (
        completedTodos === totalTodos?
            <h1>You completed all the TO DO!</h1>:
            <h1>You have completed <span>{completedTodos}</span> of <span>{totalTodos} </span>TODOS</h1>
    );
}

export { TodoCounter };
