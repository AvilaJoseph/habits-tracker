import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { HabitModal } from "../Modals/HabitModal";
import { CalendarWidget } from "./CalendarWidget";
import googlePlayIcon from "../../assets/icons/google-play.svg";

export function Happy() {
  const navigate = useNavigate();
  const [isHabitModalOpen, setIsHabitModalOpen] = useState(false);

  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = today.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <HabitModal isOpen={isHabitModalOpen} onClose={() => setIsHabitModalOpen(false)}/>
      <aside className="w-full flex flex-col gap-6 xl:gap-[14px]">
        <div className="home-panel relative overflow-hidden rounded-2xl p-6 xl:p-5">
          <div className="absolute -right-8 -top-9 h-24 w-24 rounded-full bg-amber-200/50 blur-xl" />
          <div className="absolute -left-8 bottom-8 h-20 w-20 rounded-full bg-emerald-200/40 blur-xl" />

          <div className="text-left relative">
            <p className="inline-flex rounded-2xl border border-slate-400/60 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Daily focus</p>
            <h2 className="mt-4 xl:mt-3 font-semibold text-[2.15rem] xl:text-[2rem] leading-none text-slate-900">Hello,</h2>
            <h2 className="font-semibold text-[2.15rem] xl:text-[2rem] leading-none text-emerald-900/85 mt-1">{weekday}</h2>
            <p className="text-sm text-slate-500 mt-3">{formattedDate}</p>
          </div>

          <div className="mt-6 xl:mt-5 flex flex-col gap-3 relative">
            <button className="w-full rounded-2xl bg-slate-900 py-2.5 text-white flex items-center justify-center shadow-[0_10px_22px_rgba(15,23,42,0.25)]" onClick={() => setIsHabitModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Habits
            </button>
            <button className="w-full bg-white/90 py-2.5 rounded-2xl text-slate-700 border border-slate-200/90 flex items-center justify-center" onClick={() => navigate("/habits")}>View Habits</button>
          </div>
        </div>

        <div className="home-panel rounded-2xl p-5 xl:p-4">
          <CalendarWidget />
        </div>

        <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1f4037] to-[#132820] px-6 pb-6 pt-12 xl:px-5 xl:pb-[14px] xl:pt-[34px] text-center text-white shadow-[0_14px_28px_rgba(15,23,42,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,215,160,0.22),rgba(255,255,255,0)_40%)]" />
          <h3 className="relative text-lg font-semibold leading-snug">Take your streaks <br />outside the desktop</h3>
          <p className="relative mt-2 text-sm text-emerald-100">Install the mobile build and keep progress synced.</p>
          <button className="relative mt-4 w-full rounded-2xl bg-white py-2.5 text-sm font-semibold text-slate-900 shadow-sm inline-flex items-center justify-center gap-2">
            <img src={googlePlayIcon} alt="App store icon" className="h-4 w-4" />
            <span>Get mobile app</span>
          </button>
        </div>
      </aside>
    </>
  );
}