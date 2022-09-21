import React from "react";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = ({ setModal })=> {
    const openModal = ()=> {
        setModal(true)
    }

    return (
        <button className="CreateTodoButton" onClick={()=> openModal()}>+</button>
    )
}

export { CreateTodoButton }