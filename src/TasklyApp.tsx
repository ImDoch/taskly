import { CustomHeader } from './shared/components/CustomHeader';
import { Modal } from './shared/components/Modal';
import { TaskForm } from './taskly/components/TaskForm';
import { TaskList } from './taskly/components/TaskList';
import { useTasklyUI } from './taskly/hooks/useTasklyUI';

export const TasklyApp = () => {
  const { modal, filterIsOpen, handleModal, handleFilter } = useTasklyUI();
  return (
    <>
      <CustomHeader
        isOpen={filterIsOpen}
        onAddClicked={handleModal}
        onFilterClicked={handleFilter}
      />

      <TaskList />

      <Modal
        componentToShow="create"
        current={modal}
        onOVerlayClicked={handleModal}
      >
        <TaskForm
          formTitle="Create Taskly"
          buttonName="Create"
          onCloseClicked={handleModal}
        />
      </Modal>

      {/* <Modal componentToShow="details" current={modal}>
        <TaskDetails />
      </Modal>

      <Modal componentToShow="edit" current={modal}>
        <EditTask />
      </Modal>  */}
    </>
  );
};
