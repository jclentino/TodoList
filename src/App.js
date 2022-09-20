import React, { useState } from "react"
import { TodoSearch } from "./TodoSearch"
import { TodoCounter } from "./TodoCounter"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

const allTasks = [
  {text: "cocinar", completed: false},
  {text: "lavar", completed: false},
  {text: "estudiar", completed: false},
]

function App() {
  const [tasks, setTaks] = useState(allTasks)
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
      <TodoCounter taskCompleted={taskCompleted} taskTotal={taskTotal} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {tasks.map(task => (
          <TodoItem 
            key={task.text} 
            text={task.text} 
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
