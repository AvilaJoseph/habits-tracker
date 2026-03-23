import { Modal } from "../../UI/Modal";
import { X } from "lucide-react";

export function HelpModal({ isOpen, onClose }) {
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="flex flex-col">
                    <div className="flex justify-end">
                        <button onClick={onClose} className="modal-close">
                            <X className="h-4 w-4"/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-semibold text-slate-800">Help & Support</label>
                        <p className="text-sm text-slate-400">If you need help using the app, you can explore our help resources or contact our support team directly. 
                            For faster feedback, you can also send your suggestions or issues to our <strong className="text-slate-700 font-semibold">Discord channel.</strong></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}