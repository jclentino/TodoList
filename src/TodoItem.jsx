import React from "react";
import './TodoItem.css'

const TodoItem = ({ text, completed })=> {
    const onClickEvent = (msg)=> {
        alert(msg)
    }

    return (
        <li>
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={()=> onClickEvent('added')}>+</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`} >{text}</p>
            <span className="Icon Icon-delete" onClick={()=> onClickEvent('delete')}>X</span>
        </li>
    )
}

export { TodoItem }