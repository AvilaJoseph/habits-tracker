import { createContext, useEffect, useReducer } from "react";
import { habitsReducer } from "./HabitsReducer";

export const HabitsContext = createContext();

const initialState = {
    habits: []
}

export function HabitsProvider({ children }) {
    const [state, dispatch] = useReducer(habitsReducer, initialState)

    useEffect(() => {
        const data = localStorage.getItem("habits")
        if (data) {
            dispatch({
                type: "SET_HABITS",
                payload: JSON.parse(data)
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(state.habits))
    }, [state.habits])

    return (
        <HabitsContext.Provider value={{ state, dispatch }}>
            {children}
        </HabitsContext.Provider>
    )
}