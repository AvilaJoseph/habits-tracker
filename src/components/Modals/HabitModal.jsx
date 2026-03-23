import { useState, useContext } from "react";
import { Modal } from "../UI/Modal";
import { X } from 'lucide-react';
import { HabitsContext } from "../../state/HabitsContext";

export function HabitModal({ isOpen, onClose }) {
    const { dispatch } = useContext(HabitsContext);

    const [name, setName] = useState("");
    const [frecuency, setFrequency] = useState("daily");
    const [selectedDays, setSelectedDays] = useState([]);

    const days = ["L", "M", "X", "J", "V", "S", "D"];

    const handleDayToggle = (day) => {
        setSelectedDays(prev => prev.includes(day)
            ? prev.filter(d => d !== day)
            : [...prev, day]
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        const newHabit = {
            id: crypto.randomUUID(),
            name: name,
            frequency: frecuency,
            completedDates: [],
            createdAt: new Date().toISOString()
        }
        dispatch({ type: "ADD_HABIT", payload: newHabit });

        setName("");
        setFrequency("daily");

        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col">
                <div className="flex-row justify-end flex">
                    <button onClick={onClose} className="modal-close"><X className="h-4 w-4" /></button>
                </div>
                <h2 className="text-lg font-semibold mb-4 text-slate-900">Create New Habit</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Habit Name</label>
                        <input type="text" placeholder="e.g. Drink water" className="input-field" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm text-slate-600">Frequency</label>
                        <select name="" id="" className="select-field" value={frecuency} onChange={(e) => setFrequency(e.target.value)}>
                            <option value="daily" className="text-sm text-slate-600">Diario</option>
                            <option value="weekly" className="text-sm text-slate-600">Semanal</option>
                            <option value="monthly" className="text-sm text-slate-600">Mensual</option>
                        </select>
                    </div>
                    {frecuency === "weekly" ? (
                        <div className="flex flex-col gap-1">
                            <label className="text-sm text-slate-600">Select days of the week</label>
                            <div className="flex justify-around gap-2">
                                {days.map((day) => (
                                    <div key={day} className={`w-8 h-8 rounded-md flex items-center justify-center cursor-pointer ${selectedDays.includes(day) ? "bg-slate-900 text-white " : "text-slate-400 font-light border border-gray-300 bg-white"}`} onClick={() => handleDayToggle(day)}>
                                        <p className="">{day}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                    <button type="submit" className="btn-primary">Add Habit</button>
                </form>
            </div>
        </Modal>
    )
}