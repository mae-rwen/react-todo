export default function TodoListItem({taskName}){
    return (
        <>
            <li>
                <input className="completed" type="checkbox" />
                <span className="taskName">{taskName}</span>
                <button className="delButton">Delete</button>
            </li>
        </>
    );
}