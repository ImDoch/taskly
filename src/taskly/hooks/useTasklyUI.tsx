import { useState } from 'react';

export type ModalName = 'none' | 'create' | 'details' | 'edit';

export const useTasklyUI = () => {
  const [modal, setModal] = useState<ModalName>('none');
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [optionsIsOpen, setOptionsIsOpen] = useState(false);

  const handleModal = (modalToShow: ModalName) => {
    setModal(modalToShow);
  };

  const handleFilter = () => {
    setFilterIsOpen((prev) => !prev);
  };

  const handleOptions = (open?: boolean) => {
    if (open) return setOptionsIsOpen(open);
    return setOptionsIsOpen((prev) => !prev);
  };

  return {
    modal,
    filterIsOpen,
    optionsIsOpen,
    handleModal,
    handleFilter,
    handleOptions,
  };
};
