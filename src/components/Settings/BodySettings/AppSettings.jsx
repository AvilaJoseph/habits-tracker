export function AppSettings() {
    return (
        <>
            <div className="glass-card flex flex-col mt-6 leading-tight w-full p-5 md:p-6">
                <div className="flex flex-col w-full">
                    <h3 className="text-lg font-semibold text-slate-800">App Settings</h3>
                    <p className="text-sm text-slate-500">Customize your app experience and preferences</p>
                    <hr className="w-full mt-4 border-slate-200" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Theme</h3>
                        <p className="text-sm text-slate-500">Choose between light and dark mode for the app.</p>
                    </div>
                    <div className="relative flex-shrink-0">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="switch cursor-pointer"></div>
                    </div>
                </div>
                <hr className="w-full mt-4 border-slate-200" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                    <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-700">Language</h3>
                        <p className="text-sm text-slate-500">Select your preferred language for the app interface.</p>
                    </div>
                    <select name="language" id="language" className="select-field">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>
            </div>
        </>
    )
}