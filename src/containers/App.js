import React, { useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import AppUi from "./AppUi"

const allTasks = [
  {text: "cocinar", completed: false},
  {text: "lavar", completed: false},
  {text: "estudiar", completed: false},
]

function App() {
  const [tasks, setTaks] = useLocalStorage('tasks', allTasks)
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
    <>
      <AppUi 
        tasks={tasks}
        taskTotal={taskTotal}
        taskCompleted={taskCompleted}
        completeTask={completeTask}
        deleteTask={deleteTask}

        search={search}
        setSearch={setSearch}
      />
    </>
  )
}

export default App
