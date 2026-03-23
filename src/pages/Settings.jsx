import { useState } from "react";
import { Header } from "../components/ui/Header";
import { OptionsSettings } from "../components/Settings/OptionsSettings";
import { Account } from "../components/Settings/BodySettings/Account";
import { Notifications } from "../components/Settings/BodySettings/Notifications";
import { AppSettings } from "../components/Settings/BodySettings/AppSettings";
import { OtherSettings } from "../components/Settings/BodySettings/OtherSettings";

export function Settings() {
    const [view, setView] = useState("Account");
    return (
        <>
            <div className="home-shell app-shell">
                <Header/>
                <main className="app-main">
                    <div className="view-shell flex flex-col leading-tight">
                        <h2 className="view-title">Settings</h2>
                        <p className="view-subtitle">Customize your account, app behavior and notifications</p>
                        <OptionsSettings value={view} setValue={setView} />
                        {view === "Account" && <Account/>}
                        {view === "Notifications" && <Notifications/>}
                        {view === "App Settings" && <AppSettings/>}
                        {view === "Other" && <OtherSettings/>}
                    </div>
                </main>
            </div>
        </>
    )
}