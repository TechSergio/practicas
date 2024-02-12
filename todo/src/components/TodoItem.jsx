import React, { useContext } from 'react'
import { TodoContext } from '../contexts/todoContext'

const TodoItem = ( { todo }) => {
    console.log(`Renderizando TodoItem para la tarea: ${todo}`);

    const { dispatch } = useContext(TodoContext)

    const handleRemoveTodo = () => {
        dispatch({ type: 'REMOVE_TODO', payload: todo})
    }

  return (
    <div>
        {todo}
        <button onClick={handleRemoveTodo}>Eliminar</button>
    </div>
  )
}

export default TodoItem