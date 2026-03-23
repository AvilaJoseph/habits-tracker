import { useState } from 'react';
import { AboutModal } from '../../Modals/SettingsModal/AboutModal';
import { LegalModal } from '../../Modals/SettingsModal/LegalModal';
import { FeedbackModal } from '../../Modals/SettingsModal/FeedbackModal';
import { HelpModal } from '../../Modals/SettingsModal/HelpModal';

export function OtherSettings() {
    const [selectedOption, setSelectedOption] = useState('');

    const rows = [
        { key: 'Help', title: 'Help & Support', desc: 'Access help and support resources.' },
        { key: 'Feedback', title: 'Feedback', desc: 'Send feedback or report issues.' },
        { key: 'About', title: 'About', desc: 'View app version, credits, and legal info.' },
        { key: 'Legal', title: 'Legal', desc: 'View privacy policy and terms.' },
        { key: 'Licenses', title: 'Licenses', desc: 'See open source libraries and licenses.' },
    ];

    return (
        <>
            <div className="glass-card flex flex-col mt-6 leading-tight w-full p-5 md:p-6">
                <div className="flex flex-col w-full">
                    <h3 className="text-lg font-semibold text-slate-800">Other Settings</h3>
                    <p className="text-sm text-slate-500">Manage additional app options and legal information</p>
                    <hr className="w-full mt-4 border-slate-200" />
                </div>

                {rows.map((row, index) => (
                    <div key={row.key}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full mt-4">
                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-slate-700">{row.title}</h3>
                                <p className="text-sm text-slate-500">{row.desc}</p>
                            </div>
                            <button
                                onClick={() => setSelectedOption(row.key)}
                                className={row.key === 'Licenses' ? 'btn-secondary' : 'btn-primary'}
                            >
                                View
                            </button>
                        </div>
                        {index !== rows.length - 1 && <hr className="w-full mt-4 border-slate-200" />}
                    </div>
                ))}
            </div>
            {selectedOption === 'About' && (<AboutModal isOpen={true} onClose={() => setSelectedOption(null)}/>)}
            {selectedOption === 'Legal' && (<LegalModal isOpen={true} onClose={() => setSelectedOption(null)}/>)}
            {selectedOption === 'Feedback' && (<FeedbackModal isOpen={true} onClose={() => setSelectedOption(null)}/>)}
            {selectedOption === 'Help' && (<HelpModal isOpen={true} onClose={() => setSelectedOption(null)}/>)}
        </>
    );
}