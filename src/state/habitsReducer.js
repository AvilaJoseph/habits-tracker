export function habitsReducer(state, action) {
    switch (action.type) {
        case "ADD_HABIT":
            return {
                ...state,
                habits: [...state.habits, action.payload]
            }
        case "DELETE_HABIT":
            return {
                ...state,
                habits: [...state.habits.filter(habit => habit.id !== action.payload)]
            }
        case "EDIT_HABIT":
            return {
                ...state,
                habits: [...state.habits.map(habit => habit.id === action.payload.id
                    ? { ...habit, ...action.payload.updates }
                    : habit
                )]
            }
        case "SET_HABITS":
            return {
                ...state,
                habits: action.payload
            }
        case "TOGGLE_HABIT_DATE":
            return {
                ...state,
                habits: [...state.habits.map(habit => habit.id === action.payload.id
                    ? {
                        ...habit, completedDates: habit.completedDates.includes(action.payload.date)
                            ? habit.completedDates.filter(date => date !== action.payload.date)
                            : [...habit.completedDates, action.payload.date]
                    }
                    : habit
                )]
            }
        default:
            return state;
    }
}