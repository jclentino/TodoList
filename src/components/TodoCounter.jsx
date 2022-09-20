import React from "react";
import '../styles/TodoCounter.css'

const TodoCounter = ({ taskCompleted, taskTotal })=> {
    return (
        <h2 className="TodoCounter">Has completado {taskCompleted} de {taskTotal} tareas</h2>
    )
}

export { TodoCounter }