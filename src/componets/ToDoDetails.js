import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";


const ToDoDetails = ({ item }) => {

    const { removeItem, doneItem } = useContext(ToDoContext);

    return (
        <li className={item.state ? '' : 'throughBg'}>
            <div onClick={() => { doneItem(item.id) }}>
                <div className={item.state ? 'title' : 'title through'}>{item.title}</div>
                <div className={item.state ? 'instruction' : 'instruction through'}>{item.instruction}</div>
            </div>

            <div className="delete" onClick={() => { removeItem(item.id) }}>Delete</div>
        </li>
    );
}

export default ToDoDetails;