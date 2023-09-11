import React from 'react';
//Style
import './App.css';
//Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';


const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'LALA', completed: false},
  {text: 'Conseguir un trabajo que paguen más', completed: false},
  {text: 'Tener ingresos pasivos', completed: true},
  {text: 'Aumentar mis ingresos pasivos', completed: false},
  {text: 'Aprender a cantar y bailar', completed: false},
  {text: 'Aprender a cantar y baiLAr LA', completed: false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

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
        (todo) => todo.text == text
      );
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    }

    const deleteTodoFunction = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos.splice(todoIndex, 1) ;
      setTodos(newTodos);
    }

    

  return (
    <main>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch
        searchValue={searchValue} //el primero es una props searchValue que tiene como valor la variable del useState {searchValue}
        setSearchValue={setSearchValue} //idem que el anterior
      />

      <TodoList>
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


export default App;
