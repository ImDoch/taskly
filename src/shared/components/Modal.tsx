import { createPortal } from 'react-dom';
import type { ModalName } from '../../taskly/hooks/useTasklyUI';

interface Props {
  componentToShow: ModalName;
  current: ModalName;
  children: React.ReactNode;
}

export const Modal = ({ children, componentToShow, current }: Props) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (componentToShow !== current) return;

  return createPortal(
    <div>
      <div>{children}</div>
    </div>,
    modalRoot
  );
};
