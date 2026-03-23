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

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Insights</p>
          <h3 className="text-lg font-semibold text-slate-900">Analytics</h3>
        </div>
        <button className="text-xs text-slate-500 hover:text-slate-800">View details</button>
      </div>

      <div className="grid grid-cols-12 gap-4 xl:gap-[14px] items-start">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 xl:gap-[14px]">
          <div className="rounded-2xl bg-[linear-gradient(135deg,#1f3f38_0%,#2a564d_55%,#3b6a5f_100%)] p-5 xl:p-4 text-white h-[172px] xl:h-[150px] shadow-[0_12px_24px_rgba(18,58,49,0.22)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_48%)]" />
            <p className="text-xs uppercase tracking-[0.16em] text-white/80">Positive habits</p>
            <p className="text-4xl font-semibold tracking-tight mt-2">58.2%</p>
            <p className="mt-1 text-xs text-emerald-100">Consistency score this month</p>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(160deg,#111b31_0%,#0f1a2d_60%,#141c2a_100%)] p-5 xl:p-4 text-white relative overflow-hidden h-[230px] xl:h-[200px] shadow-[0_12px_26px_rgba(15,23,42,0.24)]">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full border border-white/20" />
            <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full border border-white/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14)_0%,rgba(15,23,42,0)_45%)]" />

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-sm">YR</span>
                </div>
                <p className="text-xs text-white/80 uppercase tracking-[0.16em] leading-snug mt-4">Habits report</p>
                <p className="text-5xl font-semibold tracking-tight">2026</p>
              </div>

              <button className="w-full rounded-2xl bg-white text-slate-900 py-2.5 text-sm font-semibold">Open report</button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 xl:p-4 shadow-[0_10px_22px_rgba(15,23,42,0.1)] h-full xl:h-full flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Streak engine</span>
              <div className="h-7 w-7 rounded-full bg-orange-50 flex items-center justify-center">
                <Flame className="h-3.5 w-3.5 text-orange-500" />
              </div>
            </div>

            <p className="mt-2 text-[1.4rem] leading-none font-semibold text-slate-800">14 days</p>
            <p className="mt-1 text-[13px] leading-5 text-slate-500 mb-2">Only 2 days left to beat your record.</p>

            <div className="mt-auto">
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-slate-600 to-slate-800" />
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                <span>Progress</span>
                <span className="text-slate-600 font-medium">70%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full md:col-span-8 self-start rounded-[28px] border border-slate-200/80 bg-white p-5 xl:p-4 flex flex-col shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold">Performance board</p>
                <h4 className="mt-1 text-[2rem] leading-none font-semibold text-slate-900">Focus Habits</h4>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                Weekly view
              </span>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-2 text-center text-xs">
              <span className="rounded-lg bg-white py-1 text-slate-400">Fri11</span>
              <span className="rounded-lg bg-white py-1 font-semibold text-slate-900 shadow-[0_4px_10px_rgba(15,23,42,0.08)]">Fri12</span>
              <span className="rounded-lg bg-white py-1 text-slate-400">Fri13</span>
              <span className="rounded-lg bg-white py-1 text-slate-400">Fri14</span>
              <span className="rounded-lg bg-white py-1 text-slate-400">Fri15</span>
            </div>
          </div>

          <div className="mt-4 flex-1 flex flex-col justify-between">
            <div className="space-y-3.5 pr-1">
              {data.map((d) => {
                const pct = Math.round((d.v / max) * 100);
                const isActive = !!d.active;

                return (
                  <div key={d.label} className="grid grid-cols-[96px_1fr_42px] items-center gap-3">
                    <div className="text-sm text-slate-600">{d.label}</div>

                    <div className="h-[10px] rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={[
                          "h-full rounded-full relative overflow-hidden",
                          isActive
                            ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500"
                            : "bg-gradient-to-r from-slate-300 to-slate-400",
                        ].join(" ")}
                        style={{ width: `${pct}%` }}
                      >
                        {isActive && (
                          <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.58)_0px,rgba(255,255,255,0.58)_10px,transparent_10px,transparent_22px)]" />
                        )}
                      </div>
                    </div>

                    <div className={["text-right text-sm font-medium", isActive ? "text-amber-500" : "text-slate-500"].join(" ")}>
                      {Math.round(d.v)}%
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-[0_8px_16px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold">Top habit</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{bestHabit.label}</p>
                <p className="text-sm text-amber-600 font-medium">{Math.round(bestHabit.v)}% completion</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-[0_8px_16px_rgba(15,23,42,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-semibold">Average</p>
                <p className="mt-1 text-base font-semibold text-slate-900">{average}%</p>
                <p className="text-sm text-slate-500">Across {data.length} tracked habits</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}