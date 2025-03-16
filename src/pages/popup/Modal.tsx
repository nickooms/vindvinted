import { useRef, FC } from 'react';
import { Divider } from './Divider';
import { Button } from './Button';
import './modal.css';

export interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  title?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  buttons: React.ReactNode;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  title,
  children,
  isOpen = false,
  buttons = (
    <>
      <Button active>OK</Button>
      <Button>Cancel</Button>
    </>
  ),
  onClose = () => {},
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  if (isOpen) {
    modalRef.current?.showModal();
  }

  return (
    <dialog id="modal" className="modal" ref={modalRef}>
      <button
        id="closeModal"
        className="modal-close-btn"
        onClick={() => {
          onClose();
          modalRef.current?.close();
        }}
      >
        X
      </button>
      <div
        style={{
          position: 'sticky',
          top: 0,
          padding: '0.5rem',
          textAlign: 'center',
        }}
      >
        <h2>{title}</h2>
      </div>
      <Divider />
      <div style={{ padding: '1rem', alignItems: 'center' }}>{children}</div>
      <Divider />
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          padding: '0.5rem',
          textAlign: 'center',
        }}
      >
        {buttons}
      </div>
    </dialog>
  );
};
