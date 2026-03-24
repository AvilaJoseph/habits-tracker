export function RouteLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 rounded-full border-[3px] border-slate-300 border-t-emerald-600 animate-spin" />
        <p className="mt-3 text-sm font-medium text-slate-600">Loading...</p>
      </div>
    </div>
  );
}
