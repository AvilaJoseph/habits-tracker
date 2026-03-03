export function Wheather() {
  return (
    <section className="w-full flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-800">Weather</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">
          View Details
        </button>
      </div>

      {/* Card principal */}
      <div className="w-full rounded-3xl bg-[#f7e6a6] overflow-hidden relative p-5 min-h-[230px]">
        {/* Icono */}
        <div className="h-12 w-12 rounded-2xl bg-white/70" />

        {/* Temp */}
        <div className="absolute top-6 right-6 text-4xl font-semibold text-slate-800">
          12°C
        </div>

        {/* Stats: en fila como la imagen */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Wind</span>
            <span className="text-sm font-medium text-slate-700">2-4 km/h</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Pressure</span>
            <span className="text-sm font-medium text-slate-700">102m</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Humidity</span>
            <span className="text-sm font-medium text-slate-700">42%</span>
          </div>
        </div>

        {/* Ilustración placeholder */}
        <div className="absolute right-4 bottom-4 h-28 w-40 rounded-3xl bg-white/25" />
      </div>

      {/* Sección "Should Do!" */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-800">Should Do!</h3>
        <button className="text-xs text-slate-400 hover:text-slate-600">
          View Details
        </button>
      </div>

      {/* Lista simple (estructura) */}
      <div className="w-full flex flex-col gap-3">
        <div className="w-full rounded-2xl border border-slate-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-100" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-800">
                We go jimmm!!
              </span>
              <span className="text-xs text-slate-400">4.2k love this</span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full bg-slate-100" />
        </div>

        <div className="w-full rounded-2xl border border-slate-100 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-100" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-800">The 5am club</span>
              <span className="text-xs text-slate-400">5.4k love this</span>
            </div>
          </div>
          <div className="h-9 w-9 rounded-full bg-slate-100" />
        </div>
      </div>

      {/* Sección "Running Competition" */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">
            Running Competition
          </h3>
          <button className="text-xs text-slate-400 hover:text-slate-600">
            View Details
          </button>
        </div>

        <div className="mt-3 w-full rounded-3xl border border-slate-100 overflow-hidden">
          {/* meta info */}
          <div className="p-4 flex items-center gap-4 text-xs text-slate-400">
            <div className="h-6 w-16 rounded-full bg-slate-100" />
            <div className="h-6 w-16 rounded-full bg-slate-100" />
            <div className="h-6 w-16 rounded-full bg-slate-100" />
          </div>

          {/* mapa placeholder */}
          <div className="h-[180px] bg-slate-50" />
        </div>
      </div>
    </section>
  );
}