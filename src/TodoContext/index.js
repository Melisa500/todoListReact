import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos, //renombramos item por todos
        saveItem: saveTodos, //idem anterior 
        loading,
        error,
      } = useLocalStorage('TODO_V1',[]); //Estado inicial
    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(
        todo => !!todo.completed
    ).length;
    const totalTodos = todos.length;
    
    const searchedTodos = todos.filter(
        (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        }
    );
    
        const completeTodoFunction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed =  !newTodos[todoIndex].completed ;
        saveTodos(newTodos);
        }
    
        const deleteTodoFunction = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1) ;
        saveTodos(newTodos);
        };
    
    return (
        <TodoContext.Provider value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodoFunction,
                deleteTodoFunction,
                openModal,
                setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider, };