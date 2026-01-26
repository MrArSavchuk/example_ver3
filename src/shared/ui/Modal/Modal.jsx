import { X } from "lucide-react";
import { Stack } from "../Stack/Stack";
import styles from "./Modal.module.scss";

export const Modal = ({ changeOpen, children }) => {
    const closeModal = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            changeOpen(false);
        }
    };

    return (
        <div className={styles.modal} role="dialog">
            <div 
                className={styles.overlay} 
                onClick={closeModal}
                aria-label="Close Modal Window"
            >
                <button 
                    className={styles.closeBtn} 
                    onClick={() => changeOpen(false)}
                    aria-label="Close Modal Window"
                >
                    <X size={40} strokeWidth={1} />
                </button>
                <Stack justify="center" align="center" className={styles.modalContentWrapper}>
                    {children}
                </Stack>
            </div>
        </div>
    );
}
