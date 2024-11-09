import {FC} from 'react';
import Modal from "../../models/Modal";

import './modal.css';

interface ModalProps {
    modalOpen: Modal;
    onClose: () => void;
}

const ModalComponent: FC<ModalProps> = ({ modalOpen, onClose }) => {

    if (!modalOpen.isOpen) return null;

    const handleConfirm = () => {
        modalOpen.onConfirm();
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <button className="modal-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    <span>Attention</span>
                    <p>{modalOpen.text}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="cancel-btn">Annuler</button>
                    <button onClick={handleConfirm} className="confirm-btn">Confirmer</button>
                </div>
            </div>
        </div>
    );
};

export default ModalComponent;
