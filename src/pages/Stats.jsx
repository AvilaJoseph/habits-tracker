import { Header } from "../components/ui/Header";
import { useStatsAnalytics } from "../hooks/useStatsAnalytics";

export function Stats() {
	const { metrics, latestHabits, latestTodos, toPercent } = useStatsAnalytics();

	return (
		<div className="home-shell app-shell">
			<Header />

			<main className="app-main">
				<div className="view-shell flex flex-col leading-tight">
					<h2 className="view-title">Analytics</h2>
					<p className="view-subtitle">A simple view of your real progress</p>
					<section className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
						<article className="glass-card border-size-sm px-4 py-3">
							<p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold">Completion</p>
							<p className="mt-1 text-2xl font-semibold text-slate-900">{metrics.completionRate}%</p>
						</article>

						<article className="glass-card border-size-sm px-4 py-3">
							<p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold">Habits</p>
							<p className="mt-1 text-2xl font-semibold text-slate-900">{metrics.totalHabits}</p>
						</article>

						<article className="glass-card border-size-sm px-4 py-3">
							<p className="text-[11px] uppercase tracking-[0.12em] text-slate-500 font-semibold">To-dos</p>
							<p className="mt-1 text-2xl font-semibold text-slate-900">{metrics.totalTodos}</p>
						</article>
					</section>

					<section className="mt-4 grid grid-cols-1 xl:grid-cols-12 gap-4">
						<article className="glass-card border-size-sm p-4 xl:col-span-4">
							<h3 className="text-base font-semibold text-slate-900">Habit mix</h3>
							<p className="mt-1 text-xs text-slate-500">Distribution by frequency</p>

							<div className="mt-4 space-y-3">
								<div>
									<div className="flex items-center justify-between text-xs text-slate-600">
										<span>Daily</span>
										<span>{metrics.frequencyMap.daily || 0}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${toPercent(metrics.frequencyMap.daily || 0, metrics.totalHabits)}%` }} />
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between text-xs text-slate-600">
										<span>Weekly</span>
										<span>{metrics.frequencyMap.weekly || 0}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-sky-500" style={{ width: `${toPercent(metrics.frequencyMap.weekly || 0, metrics.totalHabits)}%` }} />
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between text-xs text-slate-600">
										<span>Monthly</span>
										<span>{metrics.frequencyMap.monthly || 0}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${toPercent(metrics.frequencyMap.monthly || 0, metrics.totalHabits)}%` }} />
									</div>
								</div>
							</div>
						</article>

						<article className="glass-card border-size-sm p-4 xl:col-span-4">
							<h3 className="text-base font-semibold text-slate-900">Focus load</h3>
							<p className="mt-1 text-xs text-slate-500">Tasks that may need attention soon</p>

							<div className="mt-4 grid grid-cols-3 gap-2">
								<div className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2">
									<p className="text-[10px] uppercase tracking-[0.08em] text-rose-700">High</p>
									<p className="mt-1 text-lg font-semibold text-rose-900">{metrics.highPriorityTodos}</p>
								</div>
								<div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
									<p className="text-[10px] uppercase tracking-[0.08em] text-amber-700">Soon</p>
									<p className="mt-1 text-lg font-semibold text-amber-900">{metrics.dueSoonTodos}</p>
								</div>
								<div className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-2">
									<p className="text-[10px] uppercase tracking-[0.08em] text-slate-600">Overdue</p>
									<p className="mt-1 text-lg font-semibold text-slate-800">{metrics.overdueTodos}</p>
								</div>
							</div>

							<p className="mt-4 text-xs text-slate-500">Tip: clear overdue tasks first to improve your completion rate faster.</p>
						</article>

						<article className="glass-card border-size-sm p-4 xl:col-span-4">
							<h3 className="text-base font-semibold text-slate-900">This week</h3>
							<p className="mt-1 text-xs text-slate-500">Items created in the last 7 days</p>

							<div className="mt-4 grid grid-cols-2 gap-2">
								<div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-3">
									<p className="text-[10px] uppercase tracking-[0.08em] text-slate-500">Habits</p>
									<p className="mt-1 text-2xl font-semibold text-slate-900">{metrics.weeklyHabits}</p>
								</div>
								<div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-3">
									<p className="text-[10px] uppercase tracking-[0.08em] text-slate-500">To-dos</p>
									<p className="mt-1 text-2xl font-semibold text-slate-900">{metrics.weeklyTodos}</p>
								</div>
							</div>
						</article>

						<article className="glass-card border-size-sm p-4 xl:col-span-5">
							<div className="flex items-center justify-between">
								<h3 className="text-base font-semibold text-slate-900">Task status</h3>
								<span className="text-xs text-slate-500">{metrics.totalTodos} total</span>
							</div>

							<div className="mt-4 space-y-4">
								<div>
									<div className="flex items-center justify-between text-sm text-slate-600">
										<span>Done</span>
										<span>{metrics.todoDone}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${toPercent(metrics.todoDone, metrics.totalTodos)}%` }} />
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between text-sm text-slate-600">
										<span>In progress</span>
										<span>{metrics.todoInProgress}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-amber-500" style={{ width: `${toPercent(metrics.todoInProgress, metrics.totalTodos)}%` }} />
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between text-sm text-slate-600">
										<span>Pending</span>
										<span>{metrics.todoPending}</span>
									</div>
									<div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
										<div className="h-1.5 rounded-full bg-slate-500" style={{ width: `${toPercent(metrics.todoPending, metrics.totalTodos)}%` }} />
									</div>
								</div>
							</div>

							<p className="mt-5 text-xs text-slate-500">Most common habit frequency: <span className="font-semibold text-slate-700 capitalize">{metrics.topFrequency[0]}</span></p>
						</article>

						<article className="glass-card border-size-sm p-4 xl:col-span-7">
							<h3 className="text-base font-semibold text-slate-900">Recent activity</h3>
							<p className="mt-1 text-xs text-slate-500">Last items you created</p>

							<div className="mt-4 grid sm:grid-cols-2 gap-3">
								<div className="rounded-xl border border-slate-200 bg-white/70 p-3">
									<p className="text-[11px] uppercase tracking-[0.08em] text-slate-500">Habits</p>
									<div className="mt-2 space-y-1.5">
										{latestHabits.length === 0 ? (
											<p className="text-sm text-slate-400">No habits yet</p>
										) : (
											latestHabits.map((habit) => (
												<p key={habit.id} className="text-sm text-slate-700 truncate">{habit.name}</p>
											))
										)}
									</div>
								</div>

								<div className="rounded-xl border border-slate-200 bg-white/70 p-3">
									<p className="text-[11px] uppercase tracking-[0.08em] text-slate-500">To-dos</p>
									<div className="mt-2 space-y-1.5">
										{latestTodos.length === 0 ? (
											<p className="text-sm text-slate-400">No to-dos yet</p>
										) : (
											latestTodos.map((todo) => (
												<div key={todo.id} className="flex items-center justify-between gap-2">
													<p className="text-sm text-slate-700 truncate">{todo.title}</p>
													<span className="text-[10px] uppercase text-slate-500">{todo.status || "todo"}</span>
												</div>
											))
										)}
									</div>
								</div>
							</div>
						</article>
					</section>
				</div>
			</main>
		</div>
	);
}
