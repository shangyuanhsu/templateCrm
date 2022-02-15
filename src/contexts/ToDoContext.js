import { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';//唯一id用

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
    const [items, setItems] = useState([
        { title: 'Learn React', instruction: 'useContext', id: 1, state: true },
        { title: 'bullet journal', instruction: 'about 100daysofcode', id: 2, state: true }
    ]);

    // 新增
    const addItem = (title, instruction) => {
        setItems([...items, { title: title, instruction: instruction, id: uuidv1() , state: true}]);
    }

    //完成
    const doneItem = (id) => {
        setItems(items.map(item => {
            if(item.id === id){
                item.state = !item.state
            }
            return item
        }));
    }
    
    //移除
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <ToDoContext.Provider value={{ items, addItem: addItem, removeItem: removeItem,doneItem:doneItem }}>
            {props.children}
        </ToDoContext.Provider>
    );

}

export default ToDoContextProvider;



