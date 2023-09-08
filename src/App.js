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
  {text: 'Aprender desarrollo web', completed: false},
  {text: 'Conseguir un trabajo que paguen más', completed: false},
  {text: 'Tener ingresos pasivos', completed: true},
  {text: 'Aumentar mis ingresos pasivos', completed: false},
  {text: 'Aprender a cantar y bailar', completed: false},
]

function App() {
  return (
    <main>
      <TodoCounter completed={16} total={20} />
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </main>
  );
}


export default App;
