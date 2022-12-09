import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './style.css';
import {useState} from "react";


export default function App() {

  const [todosArray, setTodosArray] = useState([]);

  const deleteTodo = (id) => {
    const filteredArray = todosArray.filter((todo) => {
      return todo.id !== id
    })
    setTodosArray(filteredArray)
  }

  return (
    <div className="App">
      <header>
        <h2>Todo List made by Alex, Simran, Jannis & Agata</h2>
      </header>
      <Form todosArray={todosArray} setTodosArray={setTodosArray} />
      <TodoList todos={todosArray} deleteTodo={deleteTodo}/>
    </div>
  );
}

