import { useContext, useMemo } from "react";
import { HabitsContext } from "../state/HabitsContext";
import { TodosContext } from "../state/TodosContext";

export function useStatsAnalytics() {
  const { state: habitsState } = useContext(HabitsContext);
  const { state: todosState } = useContext(TodosContext);

  const habits = habitsState?.habits ?? [];
  const todos = todosState?.todos ?? [];

  const metrics = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const threeDaysAhead = new Date(today);
    threeDaysAhead.setDate(threeDaysAhead.getDate() + 3);

    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const todoDone = todos.filter((todo) => todo.status === "done").length;
    const todoInProgress = todos.filter((todo) => todo.status === "in-progress").length;
    const todoPending = todos.filter((todo) => !todo.status || todo.status === "todo").length;
    const highPriorityTodos = todos.filter((todo) => todo.priority === "high" && todo.status !== "done").length;

    const dueSoonTodos = todos.filter((todo) => {
      if (!todo.dueDate || todo.status === "done") return false;
      const dueDate = new Date(todo.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate >= today && dueDate <= threeDaysAhead;
    }).length;

    const overdueTodos = todos.filter((todo) => {
      if (!todo.dueDate || todo.status === "done") return false;
      const dueDate = new Date(todo.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate < today;
    }).length;

    const weeklyHabits = habits.filter((habit) => {
      if (!habit.createdAt) return false;
      const created = new Date(habit.createdAt);
      created.setHours(0, 0, 0, 0);
      return created >= sevenDaysAgo && created <= today;
    }).length;

    const weeklyTodos = todos.filter((todo) => {
      if (!todo.createdAt) return false;
      const created = new Date(todo.createdAt);
      created.setHours(0, 0, 0, 0);
      return created >= sevenDaysAgo && created <= today;
    }).length;

    const frequencyMap = habits.reduce(
      (acc, habit) => {
        const key = (habit.frequency || "daily").toLowerCase();
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      },
      { daily: 0, weekly: 0, monthly: 0 }
    );

    const topFrequency = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1])[0] || ["daily", 0];
    const completionRate = todos.length ? Math.round((todoDone / todos.length) * 100) : 0;

    return {
      totalHabits: habits.length,
      totalTodos: todos.length,
      todoDone,
      todoInProgress,
      todoPending,
      highPriorityTodos,
      dueSoonTodos,
      overdueTodos,
      weeklyHabits,
      weeklyTodos,
      completionRate,
      frequencyMap,
      topFrequency,
    };
  }, [habits, todos]);

  const latestHabits = useMemo(
    () => [...habits].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)).slice(0, 4),
    [habits]
  );

  const latestTodos = useMemo(
    () => [...todos].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)).slice(0, 4),
    [todos]
  );

  const toPercent = (value, total) => (total ? Math.round((value / total) * 100) : 0);

  return {
    metrics,
    latestHabits,
    latestTodos,
    toPercent,
  };
}