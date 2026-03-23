// src/components/Home/CalendarWidget.jsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarWidget({ completionRate = "+3,2% from last month" }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const visibleMonth = currentDate.getMonth();
  const visibleYear = currentDate.getFullYear();

  const daysInMonth = new Date(visibleYear, visibleMonth + 1, 0).getDate();

  const monthName = currentDate.toLocaleDateString("es-ES", { month: "long" });
  const formattedMonth = `${monthName} ${visibleYear}`;

  const handlePrevMonth = () =>
    setCurrentDate(new Date(visibleYear, visibleMonth - 1, 1));

  const handleNextMonth = () => {
    const nextMonth = new Date(visibleYear, visibleMonth + 1, 1);
    if (nextMonth <= today) {
      setCurrentDate(nextMonth);
    }
  }

  const isCurrentMonth =
    visibleMonth === today.getMonth() &&
    visibleYear === today.getFullYear()

  return (
    <div className="w-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Calendar</p>
          <p className="mt-1 font-semibold text-slate-900 capitalize">{formattedMonth}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrevMonth}
            className="h-8 w-8 rounded-2xl border border-slate-200 bg-white flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4 text-slate-700" />
          </button>
          <button
            onClick={handleNextMonth}
            disabled={isCurrentMonth}
            className={`h-8 w-8 rounded-2xl flex items-center justify-center transition
        ${isCurrentMonth
                ? "border border-slate-100 text-slate-300 cursor-not-allowed bg-slate-100"
                : "bg-slate-900 text-white"
              }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 xl:mt-3 grid grid-cols-7 gap-1.5 xl:gap-1.5 text-center">
        {weekDayLabels.map((label) => (
          <span key={label} className="text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400">
            {label}
          </span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2 xl:gap-1.5">
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            visibleMonth === today.getMonth() &&
            visibleYear === today.getFullYear();

          const isCompleted = day % 3 === 0;

          return (
            <button
              key={`day-${i}`}
              className={`h-10 w-10 xl:h-[37px] xl:w-[37px] rounded-xl border text-sm xl:text-sm relative overflow-hidden ${isToday
                ? "bg-slate-900 text-white border-slate-900"
                : isCompleted
                  ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                  : "bg-white text-slate-600 border-slate-100"
                }`}
            >
              {isCompleted && !isToday && (
                <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              )}
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}