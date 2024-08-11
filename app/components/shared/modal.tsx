import { useRef, useState, useEffect } from 'react';

type Props = {
    isOpen: boolean;
    onClose?: () => void;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const ref = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modal = ref.current;
        if (modal) {
            isModalOpen ? modal.showModal() : modal.close();
        }
    }, [isModalOpen]);

    const closeModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    return (
        <dialog
            ref={ref}
            className='open:animate-modal-fade fixed inset-x-10 mx-auto h-1/2 rounded-lg bg-stone-200 p-4 text-zinc-800 backdrop:bg-stone-300 backdrop:opacity-50 dark:bg-zinc-800 dark:text-stone-200 dark:backdrop:bg-zinc-700'
            onKeyDown={handleKeyDown}
        >
            <button
                onClick={closeModal}
                className='absolute right-4 top-4 rounded-lg border-2 border-stone-200 p-2'
            >
                Close
            </button>
            {children}
        </dialog>
    );
}
