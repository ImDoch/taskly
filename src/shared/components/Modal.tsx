import { createPortal } from 'react-dom';

interface Props {
  componentToShow: string;
  current: string;
  children: React.ReactNode;
  onOverlayClicked: () => void;
}

export const Modal = ({
  children,
  componentToShow,
  current,
  onOverlayClicked,
}: Props) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (componentToShow !== current) return;

  return createPortal(
    <div className="overlay" onClick={onOverlayClicked}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
