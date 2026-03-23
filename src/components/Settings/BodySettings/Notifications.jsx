export function Notifications() {
    return (
        <>
            <div className="glass-card flex flex-col mt-6 leading-tight w-full p-5 md:p-6">
                <div className="flex flex-col w-full">
                    <h3 className="text-lg font-semibold text-slate-800">Notification Settings</h3>
                    <p className="text-sm text-slate-500">Manage your notification preferences</p>
                    <hr className="w-full mt-4 border-slate-200" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Email Notifications</h3>
                        <p className="text-sm text-slate-500">Receive notifications about important updates and reminders via email.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>

                <hr className="w-full mt-4 border-slate-200" />
                <div className="flex flex-col w-full mt-8">
                    <h3 className="text-lg font-semibold text-slate-800">Types of Notifications</h3>
                    <hr className="w-full mt-4 border-slate-200" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Reminders</h3>
                        <p className="text-sm text-slate-500">Get notified to complete your tasks or habits on time.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>

                <hr className="w-full mt-4 border-slate-200" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Progress Updates</h3>
                        <p className="text-sm text-slate-500">Receive updates about your daily or weekly progress and achievements.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>

                <hr className="w-full mt-4 border-slate-200" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Streak Alerts</h3>
                        <p className="text-sm text-slate-500">Get alerts to maintain your streak and avoid missing your habits.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>

                <hr className="w-full mt-4 border-slate-200" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">App Updates</h3>
                        <p className="text-sm text-slate-500">Stay informed about new features, improvements, and important announcements.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </>
    )
}