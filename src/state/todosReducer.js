export function todosReducer(state, action) {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id
                    ? { ...todo, ...action.payload.updates }
                    : todo
                )};
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}