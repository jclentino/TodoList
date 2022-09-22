import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import '../styles/TodoCounter.css'

const TodoCounter = ({ loading })=> {
    const { taskCompleted, taskTotal } = useContext(TodoContext)

    return (
        <h2 className={`TodoCounter ${loading && "disabled"}`}>Has completado {taskCompleted} de {taskTotal} tareas</h2>
    )
}

export { TodoCounter }