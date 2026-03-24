export function OptionsSettings({ value, setValue }) {
    const options = ["Account", "Notifications", "App Settings", "Other"];
    return (
        <div className="mt-4 filter-shell">
            <div className="overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                    {options.map((option) => (
                        <button
                            onClick={() => setValue(option)}
                            className={`flex-shrink-0 px-3 py-2 text-sm md:text-base border rounded-xl transition ${
                                value === option
                                    ? 'text-white bg-[#0f766e] border-[#0f766e]'
                                    : 'text-slate-600 border-slate-300 bg-white'
                            }`}
                            key={option}>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}