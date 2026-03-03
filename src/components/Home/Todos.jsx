export function Todos() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-slate-800">Today&apos;s Todos</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">
          View Details
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Lista */}
        <div className="w-full rounded-3xl border border-slate-100 bg-white p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800">Study</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-5 rounded-md border border-slate-200" />
            </div>

            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800">Groceries</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                    <span className="h-3 w-20 rounded-full bg-slate-100 inline-block" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-5 rounded-md border border-slate-200" />
            </div>

            <div className="flex items-start justify-between opacity-80">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800 line-through">Eat Healthy Food</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                    <span className="h-3 w-12 rounded-full bg-slate-100 inline-block" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-5 rounded-md bg-emerald-500" />
            </div>

            <div className="flex items-start justify-between opacity-80">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800 line-through">Read a book</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-5 rounded-md bg-emerald-500" />
            </div>

            <div className="flex items-start justify-between opacity-80">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-100" />
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-slate-800 line-through">Swimming for 45min</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="h-3 w-16 rounded-full bg-slate-100 inline-block" />
                    <span className="h-3 w-20 rounded-full bg-slate-100 inline-block" />
                  </div>
                </div>
              </div>
              <div className="h-5 w-5 rounded-md bg-emerald-500" />
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-slate-100 bg-white px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/15" />
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-semibold text-slate-800">Connect Spotify</p>
              <p className="text-xs text-slate-400">Link your account to track habits</p>
            </div>
          </div>

          <button className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-xs font-medium text-white">
            Link
          </button>
        </div>
      </div>
    </section>
  );
}