import React from 'react'
import TodoListItem from './ToDoListItem'
import '../style.css'

export default function TodoList({todos}) {
  return (
    <div className="todos">
        <ul className='todoList'>
            {todos.map((element) => {
              return <TodoListItem taskName={element} key={element.id}/>;
            })}
        </ul>
    </div>
  )
}
