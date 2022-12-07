import React from 'react'
import { useState } from "react";
import '../style.css'

export default function Form({todosArray, setTodosArray}) {
const [inputValue, setInputValue] = useState("");

  return (
    <div>
        <form>
            <input type="text" onChange={(e) => {setInputValue(e.target.value)}}/>
            <button onClick={(e) => {
              const arrayCopy = todosArray.slice();
              arrayCopy.push({taskName: inputValue});
              setTodosArray(arrayCopy)
            }}>Add task</button>
        </form>
    </div>
  )
}
