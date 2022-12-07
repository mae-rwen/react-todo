import React from 'react'
import '../style.css'

export default function TodoList() {
  return (
    <div className="todoListContainer">
        
        <ul className='todoList'>
            <li>
                <input className="completed" type="checkbox" />
                <span className='taskName'>Task1</span>
                <button className="delButton">Delete</button>
            </li>
        </ul>
        

    </div>
  )
}
