import React, { createContext, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/TodoReducer';

const TodoContext = createContext();

const TodoContextProvider = ( { children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={ {state, dispatch} }>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoContextProvider}