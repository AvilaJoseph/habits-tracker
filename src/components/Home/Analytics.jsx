import { Flame } from "lucide-react";

export function Analytics() {
  const data = [
    { label: "Reading", v: 12 },
    { label: "Gym", v: 14 },
    { label: "Swimming", v: 15.5 },
    { label: "Tennis", v: 24, active: true },
    { label: "Study", v: 15 },
    { label: "Design", v: 11 },
    { label: "Running", v: 17.5 },
  ];

  const max = Math.max(...data.map((d) => d.v));
  const average = Math.round(
    data.reduce((acc, item) => acc + item.v, 0) / data.length
  );
  const bestHabit = data.reduce((best, item) => (item.v > best.v ? item : best), data[0]);
  const topItems = [...data].sort((a, b) => b.v - a.v).slice(0, 4);

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Insights</p>
          <h3 className="text-lg font-semibold text-slate-900">Analytics</h3>
        </div>
        <button className="text-xs text-slate-500 hover:text-slate-800">View details</button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_22px_rgba(15,23,42,0.08)]">

        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-900">Habit performance</p>
          <div className="h-7 w-7 rounded-full bg-orange-50 flex items-center justify-center">
            <Flame className="h-3.5 w-3.5 text-orange-500" />
          </div>
        </div>

        <div className="mt-3 space-y-2.5">
          {topItems.map((d) => {
            const pct = Math.round((d.v / max) * 100);
            const isActive = !!d.active;

            return (
              <div key={d.label} className="grid grid-cols-[92px_1fr_40px] items-center gap-2.5">
                <div className="text-sm text-slate-600 truncate">{d.label}</div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={isActive ? "h-full rounded-full bg-emerald-500" : "h-full rounded-full bg-slate-400"}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="text-right text-xs font-medium text-slate-500">{Math.round(d.v)}%</div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold">Top habit</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{bestHabit.label}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold">Average</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{average}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}