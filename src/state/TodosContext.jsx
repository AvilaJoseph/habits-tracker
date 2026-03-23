import { createContext, useEffect, useReducer } from "react";
import { todosReducer } from "./todosReducer";

export const TodosContext = createContext();

const initialState = {
  todos: []
};

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  // Cargar datos al iniciar
  useEffect(() => {
    const data = localStorage.getItem("todos");

    if (data) {
      dispatch({
        type: "SET_TODOS",
        payload: JSON.parse(data)
      });
    }
  }, []);

  // Guardar cuando cambie el estado
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}