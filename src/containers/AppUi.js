import React, { useContext } from "react"
import { TodoSearch } from "../components/TodoSearch"
import { TodoCounter } from "../components/TodoCounter"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"
import { TodoContext, TodoProvider } from "../Context/TodoContext"


function AppUi() {
  const { 
    loading,
    error,
    tasks,
    completeTask,
    deleteTask,
  } = useContext(TodoContext)

  const renderTasks = ({ loading, error, tasks })=> {
    if (loading){
      return <p>loading...</p>
    }

    if (error){
      return <p>error...</p>
    }

    if (!error && !loading && tasks.length === 0){
      return <p>crea tu primer todo</p>
    }

    return (
      <TodoList>
        {tasks.map(task => (
        <TodoItem 
          key={task.text} 
          text={task.text} 
          completed={task.completed}
        />
        ))}
      </TodoList>
    )
  }

  return (
    <>
      
      <TodoCounter  />
      <TodoSearch />
      <TodoList>
        {renderTasks({ loading, error, tasks, completeTask, deleteTask })}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUi
