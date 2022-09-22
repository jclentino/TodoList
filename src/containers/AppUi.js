import React, { useContext } from "react"
import { TodoSearch } from "../components/TodoSearch"
import { TodoCounter } from "../components/TodoCounter"
import { TodoList } from "../components/TodoList"
import { TodoItem } from "../components/TodoItem"
import { CreateTodoButton } from "../components/CreateTodoButton"
import { TodoContext } from "../Context/TodoContext"
import { Modal } from "../modal/modal"
import { TodoForm } from "../components/TodoForm"
import Header from "../components/Header"



function AppUi() {
  const { 
    loading,
    error,
    tasks,
    completeTask,
    deleteTask,
    modal,
    setModal
  } = useContext(TodoContext)

  const renderTasks = ({ loading, error, tasks })=> {
    if (loading){
      return <p className="Loading">loading...</p>
    }

    if (error){
      return <p className="Error">error...</p>
    }

    if (!error && !loading && tasks.length === 0){
      return <p className="FirtsTask">Crea tu primer todo..</p>
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
      <Header loading={loading} >
        <TodoCounter  />
        <TodoSearch />
      </Header>

      {/* <TodoCounter  />
      <TodoSearch /> */}
      <TodoList>
        {renderTasks({ loading, error, tasks, completeTask, deleteTask })}
      </TodoList>
      {
        modal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
        
      }
      <CreateTodoButton setModal={setModal} />
    </>
  )
}

export default AppUi
