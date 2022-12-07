import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './style.css';
import {useState} from "react";


export default function App() {

  const [todosArray, setTodosArray] = useState([]);


  return (
    <div className="App">
      <header>
        <h2>Todo List made by Alex, Simran, Jannis & Agata</h2>
      </header>
      <Form todosArray={todosArray} setTodosArray={setTodosArray}/>
      <TodoList todos={todosArray}/>
    </div>
  );
}

