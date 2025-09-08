import { createPortal } from 'react-dom';

interface Props {
  componentToShow: string;
  current: string;
  children: React.ReactNode;
}

export const Modal = ({ children, componentToShow, current }: Props) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (componentToShow !== current) return;

  return createPortal(
    <div className="overlay">
      <div className="modal">{children}</div>
    </div>,
    modalRoot
  );
};
