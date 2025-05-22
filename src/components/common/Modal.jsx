import {useEffect} from "react";
import {createPortal} from "react-dom";
import {ModalClose, ModalContent, ModalOverlay} from "./styles/Modal.styled.js";

const Modal = ({isOpen, onClose, children, modalMinWidth, modalMaxWidth, modalMinHeight, modalMaxHeight}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    if (!isOpen) return null;

    return createPortal(
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}
                          min_width={modalMinWidth} max_width={modalMaxWidth}
                          min_height={modalMinHeight} max_height={modalMaxHeight}>
                <ModalClose onClick={onClose}>×</ModalClose>
                {children}
            </ModalContent>
        </ModalOverlay>,
        document.body
    );
};

export default Modal;