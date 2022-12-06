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
            {/* <li>
                <input className="completed" type="checkbox" />
                Task 2
                <button className="delButton">Delete</button>
            </li>
            <li>
                <input className="completed" type="checkbox" />
                Task 3
                <button className="delButton">Delete</button>
            </li>
            <li>
                <input className="completed" type="checkbox" />
                Task 4
                <button className="delButton">Delete</button>
            </li>
            <li>
                <input className="completed" type="checkbox" />
                Task 5
                <button className="delButton">Delete</button>
            </li> */}
        </ul>
        

    </div>
  )
}
