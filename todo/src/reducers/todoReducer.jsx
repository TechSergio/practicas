
//Declaro los estados iniciales del Reducer
const initialState = {
    todos: [],
}

//El reducer propiamente dicho con sus acciones
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':{
            const newTodo = action.payload.trim();

            if (state.todos.includes(newTodo)){
                alert(`La tarea "${newTodo}" ya existe, no se puede agregar`)
                return state;
            }else{
            //accede a el arreglo todos, y lo sustituye por el mismo mas el elemento nuevo
            return { todos:  [...state.todos, action.payload] };
            }
        }
        case 'REMOVE_TODO': 
            //sustituye el arreglo por una version sin el elemento
            return { todos: state.todos.filter((todo) => todo !== action.payload) };
        default:
            return state;
    }
};

export { initialState, todoReducer }