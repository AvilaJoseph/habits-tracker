import { Modal } from "../../UI/Modal";
import { X } from "lucide-react";

export function FeedbackModal({ isOpen, onClose }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-end'>
                        <button onClick={onClose} className='modal-close'>
                            <X className='h-4 w-4'/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-semibold text-slate-800'>Feedback</label>
                        <p className='text-sm text-slate-500'>We would love to hear your thoughts. If you encounter issues or have ideas to improve the app, please share them with us.</p>
                        <p className='text-sm text-slate-500'>All feedback is sent directly to our dedicated <strong className="text-slate-700">Discord channel</strong>, so our team can see it and respond quickly.</p>
                        <p className='text-sm text-slate-700 font-semibold'>Thank you for helping us make the app better.</p>
                    </div>
                </div>
            </Modal>
            </>
        )
    }
