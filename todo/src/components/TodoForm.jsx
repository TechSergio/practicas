import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/todoContext'

const TodoForm = () => {
    const { dispatch } = useContext(TodoContext)

    const [newTodo, setNewTodo] = useState('')

    const handleAddTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: newTodo})
    }
  return (
    <div>
        <input
            type='text'
            value={newTodo}
            onChange={ ( e ) => setNewTodo(e.target.value)}
            />
        <button onClick={handleAddTodo}> Agregar Tarea</button>
    </div>
  )
}

export default TodoForm