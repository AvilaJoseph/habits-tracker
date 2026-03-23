import { Modal} from './../../UI/Modal';
import { X, Heart } from 'lucide-react';

export function AboutModal({isOpen, onClose}) {
    return(
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className='flex flex-col'>
                    <div className='flex justify-end'>
                        <button onClick={onClose} className='modal-close'>
                            <X className='h-4 w-4'/>
                        </button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg font-semibold text-slate-800'>About</label>
                            <p className='text-sm text-slate-500'>This app is designed to help you stay organized, build better habits, and make progress every day.</p>
                            <p className='text-sm text-slate-500'>We believe small actions lead to big results, and this app is here to support you along the way.</p>
                            <p className='text-sm text-slate-700 font-semibold'>Thanks for being part of the journey <Heart className='inline-block text-red-500 ml-1 w-4 h-4'/></p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}