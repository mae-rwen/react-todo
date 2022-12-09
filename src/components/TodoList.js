import React from 'react'
import TodoListItem from './ToDoListItem'
import '../style.css'

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todos">
      <ul className="todoList">
        {todos.map((element) => {
          return <TodoListItem taskName={element} deleteTodo={deleteTodo}/>;
        })}
      </ul>
    </div>
  );
}
