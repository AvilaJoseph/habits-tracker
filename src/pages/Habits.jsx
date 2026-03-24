import { useState } from "react";
import { Header } from "../components/ui/Header"
import { FilterHabits } from "../components/Habits/FilterHabits"
import { ListHabits } from "../components/Habits/ListHabits"

export function Habits() {
    const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);

    return (
        <>
            <div className="home-shell app-shell">
                <Header />
                <main className="app-main">
                    <div className="view-shell flex flex-col leading-tight">
                        <h2 className="view-title">Habits</h2>
                        <h2 className="view-subtitle">Track your habits and stay on top of your goals</h2>
                        <FilterHabits habitModalOpen={isHabitModalOpen} setHabitModalOpen={setIsHabitModalOpen} />
                        <ListHabits habitModalOpen={isHabitModalOpen} setHabitModalOpen={setIsHabitModalOpen}/>
                    </div>
                </main>
            </div>
        </>
    )
}