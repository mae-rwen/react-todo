import React from 'react'
import { useState } from "react";
import '../style.css'

export default function Form({todosArray, setTodosArray}) {
const [inputValue, setInputValue] = useState("");

  return (
    <div>
        <form>
            <input type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
            <button onClick={(e) => {
              e.preventDefault();
              const arrayCopy = todosArray.slice();
              arrayCopy.push({input: inputValue});
              setTodosArray(arrayCopy);
              setInputValue("");
            }}>Add task</button>
        </form>
    </div>
  )
}
