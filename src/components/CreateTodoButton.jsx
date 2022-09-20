import React from "react";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = ()=> {
    const onClickEvent = (msg)=> {
        alert(msg)
    }

    return (
        <button className="CreateTodoButton" onClick={()=> onClickEvent('modal')}>+</button>
    )
}

export { CreateTodoButton }