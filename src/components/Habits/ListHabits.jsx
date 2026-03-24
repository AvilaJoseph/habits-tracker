import { useContext } from "react";
import { HabitsContext } from "../../state/HabitsContext";
import { Trash2, Eye, Edit2 } from "lucide-react";
import { HabitModal } from "../Modals/HabitModal";

export function ListHabits({ habitModalOpen, setHabitModalOpen }) {
  const { state, dispatch } = useContext(HabitsContext);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const handleView = (id) => console.log("View", id);
  const handleEdit = (id) => console.log("Edit", id);
  const handleDelete = (id) => console.log("Delete", id);

  return (
    <>
      <HabitModal isOpen={habitModalOpen} onClose={() => setHabitModalOpen(false)}/>      
      <div className="md:hidden mt-4 space-y-3">
        {state.habits.length === 0 ? (
          <div className="glass-card border-size-md p-4 text-sm text-slate-500">No habits yet</div>
        ) : (
          state.habits.map((habit) => (
            <article key={habit.id} className="glass-card border-size-md p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{habit.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{formatDate(habit.createdAt)}</p>
                </div>
                <span className="btn-pill border-size-sm border border-emerald-200 bg-emerald-50 text-emerald-700">{habit.frequency}</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button onClick={() => handleView(habit.id)} className="icon-btn border-size-sm">
                  <Eye className="h-4 w-4" />
                </button>

                <button onClick={() => handleEdit(habit.id)} className="icon-btn border-size-sm">
                  <Edit2 className="h-4 w-4" />
                </button>

                <button onClick={() => handleDelete(habit.id)} className="icon-btn border-size-sm border-rose-200 text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="hidden md:block table-shell border-size-lg w-full overflow-x-auto px-4 pb-2">
        <table className="w-full min-w-[600px] border-collapse leading-tight">
          <thead>
            <tr className="text-left table-head-row">
              <th className="py-3 font-medium">Habit</th>
              <th className="py-3 font-medium">Frequency</th>
              <th className="py-3 font-medium">Date</th>
              <th className="py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {state.habits.length === 0 ? (
              <tr className="text-left justify-center">
                <td className="table-cell" colSpan={4}>
                  No habits yet
                </td>
              </tr>
            ) : (
              state.habits.map((habit, index) => (
                <tr
                  key={habit.id}
                  className={[
                    "hover:bg-slate-50/70",
                    index !== state.habits.length - 1 ? "border-b border-slate-200" : "",
                  ].join(" ")}
                >
                  <td className="table-cell">{habit.name}</td>
                  <td className="table-cell">
                    <span className="btn-pill border-size-sm bg-emerald-50 text-emerald-700 border border-emerald-200">{habit.frequency}</span>
                  </td>
                  <td className="table-cell">{formatDate(habit.createdAt)}</td>
                  <td className="table-cell flex flex-wrap gap-2">
                    <button onClick={() => handleView(habit.id)} className="icon-btn border-size-sm">
                      <Eye className="h-4 w-4" />
                    </button>

                    <button onClick={() => handleEdit(habit.id)} className="icon-btn border-size-sm">
                      <Edit2 className="h-4 w-4" />
                    </button>

                    <button onClick={() => handleDelete(habit.id)} className="icon-btn border-size-sm border-rose-200 text-rose-600 hover:bg-rose-50">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}