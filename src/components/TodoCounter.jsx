import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import '../styles/TodoCounter.css'

const TodoCounter = ()=> {
    const { taskCompleted, taskTotal } = useContext(TodoContext)

    return (
        <h2 className="TodoCounter">Has completado {taskCompleted} de {taskTotal} tareas</h2>
    )
}

export { TodoCounter }