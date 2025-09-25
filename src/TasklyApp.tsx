import { CustomHeader } from './shared/components/CustomHeader';
//import { Modal } from './shared/components/Modal';
import { TaskList } from './taskly/components/TaskList';
import { useTasklyUI } from './taskly/hooks/useTasklyUI';

export const TasklyApp = () => {
  const { filterIsOpen, handleModal, handleFilter } = useTasklyUI();
  return (
    <>
      <CustomHeader
        isOpen={filterIsOpen}
        onAddClicked={handleModal}
        onFilterClicked={handleFilter}
      />

      <TaskList />

      {/* <Modal componentToShow="create" current={modal}>
        <CreateTask />
      </Modal>

      <Modal componentToShow="details" current={modal}>
        <TaskDetails />
      </Modal>

      <Modal componentToShow="edit" current={modal}>
        <EditTask />
      </Modal> */}
    </>
  );
};
