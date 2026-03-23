import { WeatherCard } from "../cards/WeatherCard";
import { useContext } from "react";
import { HabitsContext } from "../../state/HabitsContext";

export function Wheather() {
  const { state } = useContext(HabitsContext);

  return (
    <section className="w-full flex flex-col gap-5 xl:gap-[14px]">
      <WeatherCard />

      <div className="flex items-center justify-between px-1">
        <h3 className="text-base font-semibold text-slate-800">Should Do</h3>
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
              <span className="text-xs text-slate-500">{habit.likes} users feel motivated</span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full border border-slate-200 bg-white" />
        </div>
        ))
       )}
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base font-semibold text-slate-800">Weekly Challenge</h3>
          <button className="text-xs text-slate-500 hover:text-slate-700">View details</button>
        </div>

        <div className="mt-3 w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
          <div className="p-4 flex items-center gap-4 text-xs text-slate-400">
            <div className="h-6 w-20 rounded-full bg-amber-100" />
            <div className="h-6 w-20 rounded-full bg-emerald-100" />
            <div className="h-6 w-20 rounded-full bg-slate-100" />
          </div>
          <div className="relative h-[180px] xl:h-[148px] bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
            <div className="absolute inset-x-6 bottom-7 h-20 rounded-3xl border border-dashed border-slate-200" />
            <div className="absolute left-8 bottom-8 h-14 w-14 rounded-2xl bg-amber-200/80" />
            <div className="absolute left-28 bottom-8 h-20 w-14 rounded-2xl bg-emerald-300/70" />
            <div className="absolute left-48 bottom-8 h-10 w-14 rounded-2xl bg-slate-300/70" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
        <article className="rounded-2xl border border-slate-200 bg-white p-4 xl:p-4 shadow-[0_8px_18px_rgba(15,23,42,0.08)] h-[182px] xl:h-[156px] flex flex-col">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Focus block</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Deep work sprint</p>
            <p className="mt-1 text-sm text-slate-600">Reserve 45 minutes for your priority habit today.</p>
          </div>
          <div className="mt-4 h-2 rounded-full bg-emerald-100">
            <div className="h-2 w-2/3 rounded-full bg-emerald-500" />
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-4 xl:p-4 shadow-[0_8px_18px_rgba(15,23,42,0.08)] h-[182px] xl:h-[156px] flex flex-col">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">Recovery</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Mindful break</p>
            <p className="mt-1 text-sm text-slate-600">Take a short pause after your next completed task.</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
          </div>
        </article>
      </div>
    </section>
  );
}