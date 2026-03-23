import { Modal } from "../../UI/Modal";
import { X } from "lucide-react";

export function LegalModal({ isOpen, onClose }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="modal-close">
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-slate-800">Privacy Policy</h2>
                            <p className="text-sm text-slate-500">
                                We respect your privacy. This app only stores the data necessary to provide its core features,
                                such as your habits and preferences. Your data is not shared with third parties.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-semibold text-slate-800">Terms of Service</h2>
                            <p className="text-sm text-slate-500">
                                By using this app, you agree to our terms of service. Please read them carefully to understand your rights and responsibilities.
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}