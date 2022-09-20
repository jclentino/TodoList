import React from "react"
import { TodoSearch } from "../components/TodoSearch"
import { TodoCounter } from "../components/TodoCounter"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"


function AppUi(props) {

    const {
        tasks,
        taskTotal,
        taskCompleted,
        completeTask,
        deleteTask,
        search,
        setSearch
    } = props 

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

export default AppUi
