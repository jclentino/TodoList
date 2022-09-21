import React from "react"
import { TodoSearch } from "../components/TodoSearch"
import { TodoCounter } from "../components/TodoCounter"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"
import { TodoContext, TodoProvider } from "../Context/TodoContext"


function AppUi() {
  const renderTasks = ({ loading, error, tasks, completeTask, deleteTask })=> {
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
      <TodoContext.Consumer>
        {
          ({loading,
            error,
            tasks,
            taskTotal,
            taskCompleted,
            completeTask,
            deleteTask,
            search,
            setSearch
          })=> (
            <>
              <TodoCounter taskCompleted={taskCompleted} taskTotal={taskTotal} />
              <TodoSearch search={search} setSearch={setSearch} />
              <TodoList>
                {renderTasks({ loading, error, tasks, completeTask, deleteTask })}
              </TodoList>
            </>
          )
        }
      </TodoContext.Consumer>      
      <CreateTodoButton />
    </>
  )
}

export default AppUi
