import { useContext } from "react";
import { TodosContext } from "../../state/TodosContext";
import { Trash2, Eye, Edit2 } from "lucide-react";
import { TodoModal } from "../Modals/TodoModal";

export function ListTodo({ isTodoModalOpen, setIsTodoModalOpen }) {
  const { state, dispatch } = useContext(TodosContext);

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  const handleView = (id) => console.log("View", id);
  const handleEdit = (id) => console.log("Edit", id);
  const handleDelete = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  return (
    <>
      <TodoModal isOpen={isTodoModalOpen} onClose={()=> setIsTodoModalOpen(false)}/>
      <div className="md:hidden mt-4 space-y-3">
        {state.todos.length === 0 ? (
          <div className="glass-card border-size-md p-4 text-sm text-slate-500">No to do yet</div>
        ) : (
          state.todos.map((todo) => (
            <article key={todo.id} className="glass-card border-size-md p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">{todo.title}</h4>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{todo.description || "-"}</p>
                </div>
                <span className={`btn-pill border-size-sm ${
                    todo.priority === "high"
                      ? "bg-rose-100 text-rose-700 border border-rose-200"
                      : todo.priority === "medium"
                      ? "bg-orange-100 text-orange-700 border border-orange-200"
                      : "bg-sky-100 text-sky-700 border border-sky-200"
                  }`}>
                  {todo.priority || "low"}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs">
                <span className={`btn-pill border-size-sm ${
                    todo.status === "done"
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : todo.status === "in-progress"
                      ? "bg-amber-100 text-amber-700 border border-amber-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}>
                  {todo.status || "todo"}
                </span>
                <span className="text-slate-500">{formatDate(todo.dueDate)}</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button onClick={() => handleView(todo.id)} className="icon-btn border-size-sm">
                  <Eye className="h-4 w-4" />
                </button>

                <button onClick={() => handleEdit(todo.id)} className="icon-btn border-size-sm">
                  <Edit2 className="h-4 w-4" />
                </button>

                <button onClick={() => handleDelete(todo.id)} className="icon-btn border-size-sm border-rose-200 text-rose-600 hover:bg-rose-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="hidden md:block table-shell border-size-lg w-full overflow-x-auto px-4 pb-2">
        <table className="w-full min-w-[700px] border-collapse leading-tight">
          <thead>
            <tr className="text-left table-head-row">
              <th className="py-3 font-medium">Title</th>
              <th className="py-3 font-medium">Description</th>
              <th className="py-3 font-medium">Status</th>
              <th className="py-3 font-medium">Priority</th>
              <th className="py-3 font-medium">Created At</th>
              <th className="py-3 font-medium">Due Date</th>
              <th className="py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {state.todos.length === 0 ? (
              <tr>
                <td colSpan={7} className="table-cell text-center">No to do yet</td>
              </tr>
            ) : (
              state.todos.map((todo, index) => (
                <tr
                  key={todo.id}
                  className={[
                    "hover:bg-slate-50/70",
                    index !== state.todos.length - 1 ? "border-b border-slate-200" : "",
                  ].join(" ")}
                >
                  <td className="table-cell text-slate-700">{todo.title}</td>
                  <td className="table-cell">{todo.description || "-"}</td>
                  <td className="table-cell">
                    <span className={`btn-pill border-size-sm ${
                        todo.status === "done"
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                          : todo.status === "in-progress"
                          ? "bg-amber-100 text-amber-700 border border-amber-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}>
                      {todo.status || "todo"}
                    </span>
                  </td>

                  <td className="table-cell">
                    <span className={`btn-pill border-size-sm ${
                        todo.priority === "high"
                          ? "bg-rose-100 text-rose-700 border border-rose-200"
                          : todo.priority === "medium"
                          ? "bg-orange-100 text-orange-700 border border-orange-200"
                          : "bg-sky-100 text-sky-700 border border-sky-200"
                      }`}>
                      {todo.priority || "low"}
                    </span>
                  </td>
                  <td className="table-cell">{formatDate(todo.createdAt)}</td>
                  <td className="table-cell">{formatDate(todo.dueDate)}</td>
                  <td className="table-cell">
                    <div className="flex gap-2">
                      <button onClick={() => handleView(todo.id)} className="icon-btn border-size-sm">
                        <Eye className="h-4 w-4" />
                      </button>

                      <button onClick={() => handleEdit(todo.id)} className="icon-btn border-size-sm">
                        <Edit2 className="h-4 w-4" />
                      </button>

                      <button onClick={() => handleDelete(todo.id)} className="icon-btn border-size-sm border-rose-200 text-rose-600 hover:bg-rose-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
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