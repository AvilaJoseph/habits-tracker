export function Account() {
    return (
        <div className="glass-card flex flex-col mt-6 leading-tight w-full p-5 md:p-6">
            <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold text-slate-800">Account Settings</h3>
                <p className="text-sm text-slate-500">Manage your account information and preferences</p>
                <hr className="w-full mt-4 border-slate-200" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-4">
                <div>
                    <h3 className="text-sm font-semibold text-slate-700">Name</h3>
                    <p className="text-sm text-slate-500">This is the name that will be displayed on your profile and across the app.</p>
                </div>
                <div className="w-full md:w-auto">
                    <input type="text" placeholder="Enter your name"
                        className="w-full md:w-64 input-field"
                    />
                </div>
            </div>

            <hr className="w-full mt-4 border-slate-200" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-4">
                <div>
                    <h3 className="text-sm font-semibold text-slate-700">Email</h3>
                    <p className="text-sm text-slate-500">This is the email that will be used for account notifications and login.</p>
                </div>
                <div className="w-full md:w-auto">
                    <input type="text" placeholder="Enter your email"
                        className="w-full md:w-64 input-field"
                    />
                </div>
            </div>

            <hr className="w-full mt-4 border-slate-200" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full mt-4">
                <div>
                    <h3 className="text-sm font-semibold text-slate-700">Password</h3>
                    <p className="text-sm text-slate-500">Change your password to keep your account secure.</p>
                </div>
                <div className="w-full md:w-auto">
                    <input type="password" placeholder="Enter new password"
                        className="w-full md:w-64 input-field"
                    />
                </div>
            </div>

            <hr className="w-full mt-4 border-slate-200" />

            <div className="w-full justify-center items-center mt-4 flex">
                <button className="btn-primary px-6">Save Changes</button>
            </div>
        </div>
    );
}