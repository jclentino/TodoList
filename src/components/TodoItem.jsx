import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import '../styles/TodoItem.css'

const TodoItem = ({ text, completed })=> {
    const { completeTask, deleteTask } = useContext(TodoContext)

    return (
        <li>
            <span 
                className={`Icon Icon-check ${completed && "Icon-check--active"}`} 
                onClick={()=> completeTask(text)}
            >
                +
            </span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`} >{text}</p>
            <span 
                className="Icon Icon-delete" 
                onClick={()=> deleteTask(text)}
            >
                X
            </span>
        </li>
    )
}

export { TodoItem }