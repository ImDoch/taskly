import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { Modal } from './shared/components/Modal';
import { CreateTaskly } from './taskly/components/CreateTaskly';

export const TasklyApp = () => {
  const [modal, setModal] = useState<'none' | 'create' | 'detail'>('none');

  const handleCreateModal = () => {
    setModal('create');
  };

  const handleCloseModal = () => {
    setModal('none');
  };
  return (
    <>
      <CustomHeader title="Taskly" onCreateTasklyModal={handleCreateModal} />
      <Modal componentToShow="create" current={modal}>
        <CreateTaskly onCloseModal={handleCloseModal} />
      </Modal>
    </>
  );
};
