import React from "react";
import './TodoCounter.css'

const TodoCounter = ({ taskCompleted, taskTotal })=> {
    return (
        <h2 className="TodoCounter">Has completado {taskCompleted} de {taskTotal} tareas</h2>
    )
}

export { TodoCounter }