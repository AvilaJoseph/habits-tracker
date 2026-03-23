import { useContext, useState } from "react";
import { Modal } from "../UI/Modal";
import { X } from 'lucide-react'
import { TodosContext } from "../../state/TodosContext";

export function TodoModal({ isOpen, onClose }) {
    const { dispatch } = useContext(TodosContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");
    const [status, setStatus] = useState("todo");
    const [dueDate, setDueDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        dispatch({
            type: "ADD_TODO",
            payload: {
                id: crypto.randomUUID(),
                title: title.trim(),
                description: description.trim(),
                priority,
                status,
                createdAt: new Date().toISOString(),
                dueDate: dueDate || null,
            }
        });

        setTitle("");
        setDescription("");
        setPriority("low");
        setStatus("todo");
        setDueDate("");
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <button type="button" onClick={onClose} className="modal-close">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <h2 className="text-lg font-semibold mb-4 text-slate-900">Create New To-do</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Title</label>
                        <input
                            type="text"
                            placeholder="e.g. Drink water"
                            className="input-field"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Description</label>
                        <textarea
                            className="input-field textarea-field"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Priority</label>
                        <select
                        value={priority}
                        onChange={(e)=> setPriority(e.target.value)}
                        name="" id="" className="select-field">
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Status</label>
                        <select
                        value={status}
                        onChange={(e)=> setStatus(e.target.value)}
                        className="select-field">
                            <option value="todo">To do</option>
                            <option value="in-progress">In progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Due date</label>
                        <input type="date" className="select-field" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>
                    <button type="submit" className="btn-primary">Add To-do</button>
                </form>
            </div>
        </Modal>
    )
}