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
                <Modal>
{/*                     <button 
                        className='buttom__close'
                        onClick={() =>{
                            setOpenModal(state => !state);
                        }}
                    >
                        x
                    </button>
                    <label htmlFor='todo'>Add to do</label>
                    <input className='input__modal' tipe='text' id='todo' name='todos' placeholder='Write here'/>
                    <div className='div__buttom'>
                        <buttom className='buttom__modal'>CLEAR</buttom>
                        <buttom className='buttom__modal'>SUMMIT</buttom>
                    </div> */}
                </Modal>
            )}
        </main>
    );
}

export { AppUI };
