import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
    const { state } = useContext(TodoContext)


  return (
    <div>
        <h2> Lista de tareas</h2>
        <ul>
            {state.todos.map((todo) => (
                <TodoItem key={todo} todo={todo} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList