import React from "react";
import './TodoItem.css'

const TodoItem = ({ text, completed })=> {
    return (
        <li>
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>+</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`} >{text}</p>
            <span className="Icon Icon-delete">X</span>
        </li>
    )
}

export { TodoItem }