import spotifyLogo from "./../../assets/icons/spotify-icon.svg";
import { useContext } from "react";
import { HabitsContext } from "./../../state/HabitsContext";
import { SquareCheckBig, Square } from 'lucide-react'

export function Todos() {
  const { state } = useContext(HabitsContext);

  return (
    <section className="w-full">
      <div className="mb-4 rounded-2xl border border-slate-200/70 bg-white/75 p-4 backdrop-blur-sm shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Task board</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">Today&apos;s Todos</h3>
          </div>
          <button className="text-xs text-slate-500 hover:text-slate-800">View details</button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full rounded-2xl">
          <div className="flex flex-col gap-3">
            {state.habits.length === 0 ? (
              <div className="flex items-start justify-between rounded-2xl border border-dashed border-slate-200 p-3 bg-white shadow-[0_8px_16px_rgba(15,23,42,0.05)]">
                <div className="flex gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-100" />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-slate-400">No habits yet</p>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                      <span className="h-3 w-20 rounded-full bg-slate-100 inline-block" />
                    </div>
                  </div>
                </div>
                <div className="h-5 w-5 rounded-md border border-slate-200" />
              </div>
            ) : (
              state.habits.slice(0, 3).map((habit) => (
                <div className="flex items-start justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_16px_rgba(15,23,42,0.06)]" key={habit.id}>
                  {habit.completed ? (
                    <>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-100/70" />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium text-slate-800 line-through">
                            {habit.name}
                          </p>
                          <div className="mt-1 flex items-center gap-3">
                            <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                            <span className="h-3 w-12 rounded-full bg-slate-100 inline-block" />
                          </div>
                        </div>
                      </div>
                      <SquareCheckBig className="w-5 h-5 text-emerald-500"/>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-3">
                        <div className="h-10 w-10 rounded-xl bg-amber-100/70" />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium text-slate-800">
                            {habit.name}
                          </p>
                          <div className="mt-1 flex items-center gap-3">
                            <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                            <span className="h-3 w-12 rounded-full bg-slate-100 inline-block" />
                          </div>
                        </div>
                      </div>
                      <Square className="w-5 h-5 text-slate-300"/>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="w-full rounded-2xl bg-white px-4 py-3 flex items-center justify-between gap-4 shadow-[0_10px_22px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <img src={spotifyLogo} alt="Spotify Logo" className="h-10 w-10 rounded-xl" />
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-slate-800">Connect Spotify</p>
              <p className="text-xs text-slate-500">Use playlists as motivation checkpoints</p>
            </div>
          </div>
          <button className="shrink-0 rounded-xl bg-emerald-700 px-4 py-2 text-xs font-medium text-white">Link</button>
        </div>
      </div>
    </section>
  );
}