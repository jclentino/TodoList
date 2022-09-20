import React from "react";
import './TodoItem.css'

const TodoItem = ({ text, completed, completeTask, deleteTask })=> {
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