export function Analytics() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-slate-900">Analytics</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">
          View Details
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left cards */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="rounded-3xl bg-[#4E7B63] text-white p-6">
            <p className="text-sm text-white/85">Positive Habits</p>
            <p className="text-4xl font-semibold mt-2">+58,2%</p>
          </div>

          <div className="rounded-3xl bg-black text-white p-6 flex flex-col gap-6">
            <div>
              <p className="text-sm text-white/80 leading-snug">
                Habits <br />
                Wrapped
              </p>
              <p className="text-5xl font-semibold mt-3">2023</p>
            </div>

            <button className="w-full rounded-2xl bg-white text-slate-900 py-2.5 text-sm font-medium">
              View
            </button>
          </div>
        </div>

        {/* Right chart box */}
        <div className="col-span-12 lg:col-span-8 rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 overflow-x-auto">
          {/* top row: stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h4 className="text-base font-semibold text-slate-900">
              Favorite Habits
            </h4>

            <div className="flex items-center gap-3">
              <div className="h-9 w-36 sm:w-40 rounded-full border border-slate-200 shrink-0" />
              <div className="h-9 w-24 sm:w-28 rounded-full border border-slate-200 shrink-0" />
            </div>
          </div>

          {/* Chart content: allow horizontal scroll on very small screens */}
          <div className="mt-5 min-w-[520px] sm:min-w-0">
            {/* days */}
            <div className="grid grid-cols-5 text-center text-xs text-slate-400">
              <span>Fri11</span>
              <span className="text-slate-900 font-medium">Fri12</span>
              <span>Fri13</span>
              <span>Fri14</span>
              <span>Fri15</span>
            </div>

            <div className="mt-2 relative h-px bg-slate-100">
              <div className="absolute left-[20%] w-[20%] h-[2px] -top-[1px] bg-slate-900 rounded-full" />
            </div>

            {/* Bars */}
            <div className="mt-8 h-[190px] flex items-end justify-between gap-3 sm:gap-4">
              <BarSimple label="Reading" h={110} />
              <BarSimple label="Gym" h={130} />
              <BarSimple label="Swimming" h={145} />
              <BarSimple label="Tennis" h={180} active />
              <BarSimple label="Study" h={140} />
              <BarSimple label="Design" h={105} />
              <BarSimple label="Running" h={160} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BarSimple({ label, h, active }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <p className="text-[11px] sm:text-xs text-slate-400 mb-2 sm:mb-3">
        {label}
      </p>
      <div
        className={`w-full max-w-[44px] sm:max-w-[70px] rounded-[22px] sm:rounded-[26px] ${
          active ? "bg-[#F4B170]" : "bg-slate-100"
        }`}
        style={{ height: h }}
      />
    </div>
  );
}