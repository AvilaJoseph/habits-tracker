import { Modal } from "../UI/Modal";
import { X } from "lucide-react";

export function ShouldDo({ isOpen, onClose }) {
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col">
                <div className="flex-row justify-end flex">
                    <button onClick={onClose} className="modal-close"><X className="h-4 w-4" /></button>
                </div>
                <h2 className="text-lg font-semibold text-slate-900">Should Do</h2>
                <p className="mt-2 text-sm text-slate-600">Feature coming soon. This panel will suggest priority habits for your next session.</p>
            </div>
        </Modal>
    )}