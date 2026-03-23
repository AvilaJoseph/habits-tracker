import { createPortal } from "react-dom";

export function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal-overlay" onClick={onClose}/>
            <div className="modal-surface animate-modalIn" onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>,
        document.body
    );
}