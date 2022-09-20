import React from "react"
import { TodoSearch } from "./TodoSearch"
import { TodoCounter } from "./TodoCounter"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

const tasks = [
  {text: "cocinar", completed: false},
  {text: "lavar", completed: false},
  {text: "estudiar", completed: false},
]

function App(props) {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {tasks.map(task => (
          <TodoItem key={task.text} text={task.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
