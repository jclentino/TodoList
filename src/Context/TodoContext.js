import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext()

const TodoProvider = ({ children })=> {
    const allTasks = [
        {text: "cocinar", completed: false},
        {text: "lavar", completed: false},
        {text: "estudiar", completed: false},
    ]

    const {item: tasks, saveItem: setTaks, loading, error} = useLocalStorage('tasks', allTasks)
    const [search, setSearch] = useState('')

    const taskCompleted = tasks.filter(task => task.completed).length 
    const taskTotal = tasks.length 

    let searchedTasks = []

    if (!searchedTasks >= 1){
        searchedTasks = tasks
    } else {
        searchedTasks = tasks.filter(task => {
        const text = task.text.toLowerCase()
        const searchText = search.toLowerCase()
        return  text.includes(searchText)
        })
    }

    const completeTask = (text)=> {
        const index = tasks.findIndex(task => task.text === text)
        const newTasks = [ ...tasks]
        newTasks[index].completed = !newTasks[index].completed 
        setTaks(newTasks)
    }

    const deleteTask = (text) => {
        const index = tasks.findIndex(task => task.text === text)
        const newTasks = [ ...tasks]
        newTasks.splice(index, 1)
        setTaks(newTasks)
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            tasks,
            taskTotal,
            taskCompleted,
            completeTask,
            deleteTask,
            search,
            setSearch,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}