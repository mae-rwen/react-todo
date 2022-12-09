import { useState } from "react";
export default function TodoListItem({taskName}){
    
    const [isChecked, setIsChecked] = useState(false);
    function checkBoxHandler(){
        setIsChecked(!isChecked)

    }
    return (
            <li>
                <input className="completed" type="checkbox" onChange={checkBoxHandler}/>
                <span className= {isChecked? "checkedLook":"taskName"}>{taskName.input}</span>
                <button className="delButton">Delete</button>
            </li>
    );
}