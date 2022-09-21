import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";


const TodoForm = ()=> {
    const [value, setValue] = useState('')
    const { addTask, setModal } = useContext(TodoContext)

    const onChangeValue = (event)=> {
        setValue(event.target.value)
    }

    const onCancel = ()=> {
        setModal(false)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        const task = {
            text: value,
            completed: false
        }
        addTask(task)
        setModal(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">new task</label>
            <textarea  placeholder="into your new task" value={value} onChange={onChangeValue} />
            <div>
                <button onClick={onCancel}>cancel</button>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export { TodoForm }