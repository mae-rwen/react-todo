import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './style.css';

function App() {
  return (
    <div className="App">
      <header>
            Todo List made by Alex, Simran, Jannis & Agata
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
