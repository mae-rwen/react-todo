import { useState } from "react";


export default function TodoListItem({ taskName, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(false);

  // const [visible, setVisible] = useState(taskName);

  function checkBoxHandler() {
    setIsChecked(!isChecked);
  }
  return (
    <li>
      <input className="completed" type="checkbox" onChange={checkBoxHandler} />
      <span className={isChecked ? "checkedLook" : "taskName"}>
        {taskName.input}
      </span>
      <button
        className="delButton"
        onClick={() => {
          deleteTodo(taskName.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}