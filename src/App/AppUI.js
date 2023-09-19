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
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import '../Modal/Modal.css'
import { TodoContext } from '../TodoContext';

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completeTodoFunction,
        deleteTodoFunction,
        openModal,
        setOpenModal,
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
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal
                    setOpenModal={setOpenModal}
                >
                    <TodoForm/>
                </Modal>
            )}
        </main>
    );
}

export { AppUI };
