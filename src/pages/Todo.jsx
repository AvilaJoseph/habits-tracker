import { useState } from "react";
import { FilterTodo } from "../components/Todo/FilterTodo";
import { ListTodo } from "../components/Todo/ListTodo";
import { Header } from "../components/ui/Header";

export function Todo() {
    const [isTodoModalOpen, setIsTodoModalOpen] = useState(false)
    return (
        <>
            <div className="home-shell app-shell">
                <Header/>
                <main className="app-main">
                    <div className="view-shell flex flex-col leading-tight">
                        <h2 className="view-title">To-Do</h2>
                        <h2 className="view-subtitle">Organize your tasks and stay focused every day</h2>
                        <FilterTodo isTodoModalOpen={isTodoModalOpen} setIsTodoModalOpen={setIsTodoModalOpen}/>
                        <ListTodo isTodoModalOpen={isTodoModalOpen} setIsTodoModalOpen={setIsTodoModalOpen}/>
                    </div>
                </main>
            </div>
        </>
    )
}