
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import ToDoDetails from "./ToDoDetails";


const ToDoList = () => {
    const { items } = useContext(ToDoContext);

    return items.length ? (
        <div className="todo_list">
            <ul>
                {items.map(item => {
                    return (<ToDoDetails item={item} key={item.id} />)
                })}

            </ul>
        </div >
    ) : (
        <div className="empty">No items to do.</div >
    );
}

export default ToDoList;