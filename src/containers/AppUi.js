import React from "react"
import { TodoSearch } from "../components/TodoSearch"
import { TodoCounter } from "../components/TodoCounter"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"


function AppUi(props) {
    const {
        loading,
        error,
        tasks,
        taskTotal,
        taskCompleted,
        completeTask,
        deleteTask,
        search,
        setSearch
    } = props 

  const renderTasks = ()=> {
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
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </TodoList>
    )
  }

  return (
    <>
      <TodoCounter taskCompleted={taskCompleted} taskTotal={taskTotal} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {renderTasks()}
        {/* {tasks.map(task => (
          <TodoItem 
            key={task.text} 
            text={task.text} 
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))} */}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default AppUi
