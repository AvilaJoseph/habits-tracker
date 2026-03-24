import { WeatherCard } from "../cards/WeatherCard";
import { useContext } from "react";
import { HabitsContext } from "../../state/HabitsContext";

export function Wheather() {
  const { state } = useContext(HabitsContext);

  return (
    <section className="w-full flex flex-col gap-5 xl:gap-[14px]">
      <WeatherCard />

      <div className="flex items-center justify-between px-1">
        <h3 className="text-base font-semibold text-slate-800">Next Up</h3>
        <button className="text-xs text-slate-500 hover:text-slate-700">View details</button>
      </div>

      <div className="w-full flex flex-col gap-3">
       {state.habits.length === 0 ? (
          <div className="w-full rounded-[22px] border border-slate-200 bg-white/75 p-4 flex items-center justify-center shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
            <span className="text-sm text-slate-400">No habits yet</span>
          </div>
       ) :(
        state.habits.slice(0, 2).map(habit=>(
          <div className="w-full rounded-2xl border border-slate-200 bg-white/80 p-4 flex items-center justify-between shadow-[0_8px_18px_rgba(15,23,42,0.06)]" key={habit.id}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-200/80 to-emerald-200/80" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-800">{habit.name}</span>
              <span className="text-xs text-slate-500">Quick win for today</span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full border border-slate-200 bg-white" />
        </div>
        ))
       )}
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Focus block</p>
          <span className="text-xs text-slate-500">45 min</span>
        </div>
        <p className="mt-2 text-base font-semibold text-slate-900">Deep work sprint</p>
        <p className="mt-1 text-sm text-slate-600">Reserve one focused session for your priority habit.</p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_18px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Weekly focus</p>
          <button className="text-xs text-slate-500 hover:text-slate-700">View details</button>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.08em] text-emerald-700">Habits</p>
            <p className="mt-1 text-lg font-semibold text-emerald-900">{state.habits.length}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.08em] text-slate-600">Sessions</p>
            <p className="mt-1 text-lg font-semibold text-slate-800">3</p>
          </div>
        </div>

        <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
          <div className="h-2 w-[62%] rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
        </div>
      </article>

    </section>
  );
}