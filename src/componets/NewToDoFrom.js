import { useState, useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";


const NewToDoFrom = () => {

    const { addItem } = useContext(ToDoContext);
    const [title, setTitle] = useState('');
    const [instruction, setInstruction] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(title, instruction);
        setTitle("");
        setInstruction("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title :
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Instruction :
                <input type="text" required value={instruction} onChange={(e) => setInstruction(e.target.value)} />
            </label>
            <button>Add To Do</button>
        </form>
    )

}
export default NewToDoFrom;