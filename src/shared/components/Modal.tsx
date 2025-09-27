import { createPortal } from 'react-dom';
import type { ModalName } from '../../taskly/hooks/useTasklyUI';

interface Props {
  componentToShow: ModalName;
  current: ModalName;
  children: React.ReactNode;
  onOVerlayClicked: (modalName: ModalName) => void;
}

export const Modal = ({
  children,
  componentToShow,
  current,
  onOVerlayClicked,
}: Props) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (componentToShow !== current) return;

  return createPortal(
    <div
      onClick={() => onOVerlayClicked('none')}
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-4/5 max-w-md min-w-2xs bg-gray-100 p-6 rounded-3xl shadow-lg"
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
};
