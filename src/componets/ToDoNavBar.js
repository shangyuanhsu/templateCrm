import { useContext, useEffect, useState } from "react";
import { ToDoContext } from '../contexts/ToDoContext'
const ToDoNavBar = () => {
    const { items } = useContext(ToDoContext)
    const [doneItem, setDoneItem] = useState(0);

    useEffect(() => {
        const arr = items.filter(x => x.state === false);
        setDoneItem(arr.length);
    },[items])
    return (
        <div className="toDoNavBar">
            <h3>To-do list of the day</h3>
            <p>The plan has <b>{items.length}</b> to-dos / You Finish <b>{doneItem}</b> to-dos</p>
        </div>
    )
}
export default ToDoNavBar;
