import React from 'react';
//Components
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index.js';
import { TodosLoading } from '../TodosLoading'; 
import { TodosError } from '../TodosError'; 
import { EmptyTodos } from '../EmptyTodos'; 
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoContext } from '../TodoContext';

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodoFunction,
        deleteTodoFunction,
    } = React.useContext(TodoContext)

    return (
        <main>
            <TodoCounter />
            <TodoSearch/>

            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => completeTodoFunction(todo.text)}
                        onDelete={() => deleteTodoFunction(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton/>
        </main>
    );
}

export { AppUI };

/*             
--- todoCounter-----
completed={completedTodos} 
            total={totalTodos} 
            
       -------todoSearch--------
                   searchValue={searchValue} //el primero es una props searchValue que tiene como valor la variable del useState {searchValue}
            setSearchValue={setSearchValue} //idem que el anterior
            /     
            */