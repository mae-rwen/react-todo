import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './style.css';

function App() {

  let todos = [];


  return (
    <div className="App">
      <header>
            <h2>Todo List made by Alex, Simran, Jannis & Agata</h2>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
