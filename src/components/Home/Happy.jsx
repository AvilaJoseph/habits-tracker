import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export function Happy() {
  return (
    <aside className="w-full flex flex-col gap-6">
      {/* HEADER HAPPY */}
      <div className="w-full">
        <div className="text-left">
          <h2 className="font-semibold text-4xl leading-none">Happy</h2>
          <h2 className="font-semibold text-4xl leading-none mt-1">Tuesday 👋</h2>
          <p className="font-light text-gray-400 mt-2">30 Dic 2023, 10:30 am</p>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button className="w-full bg-[#f9b672] py-2 rounded-xl text-white flex items-center justify-center">
            <Plus className="mr-2 h-4 w-4" />
            New Habits
          </button>

          <button className="w-full bg-white py-2 rounded-xl text-slate-700 border border-slate-200 flex items-center justify-center">
            Browse Popular Habits
          </button>
        </div>
      </div>

      {/* CALENDARIO (estructura básica) */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <p className="font-medium text-slate-800">December, 2023</p>
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center">
              <ChevronLeft className="h-4 w-4 text-slate-600" />
            </button>
            <button className="h-8 w-8 rounded-full bg-[#f9b672] text-white flex items-center justify-center">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <button
              key={i}
              className="h-10 w-10 rounded-full border border-slate-100 text-slate-600"
            >
              {i + 1 <= 31 ? i + 1 : ""}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-emerald-600 font-medium">+3,2% from last month</p>
      </div>

      {/* SYNC ANYWHERE CARD (como la imagen) */}
      <div className="w-full relative overflow-hidden rounded-3xl bg-[#fbf3de] px-6 pb-5 pt-14 text-center">
        {/* “imagen” arriba (placeholder) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="h-24 w-24 rounded-3xl bg-white/70 border border-white" />
        </div>

        {/* rayito decorativo */}
        <div className="absolute top-6 right-6">
          <div className="h-8 w-8 rounded-full bg-orange-200/60" />
        </div>

        <h3 className="text-lg font-semibold text-slate-800 leading-snug">
          Sync anywhere with
          <br />
          Hebats Mobile App
        </h3>

        <p className="mt-2 text-sm text-slate-500">Download now, sync later!</p>

        <button className="mt-5 w-full rounded-2xl bg-white py-2.5 text-sm font-medium text-slate-800 shadow-sm">
          Download App
        </button>
      </div>
    </aside>
  );
}