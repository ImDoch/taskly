import { CustomHeader } from './shared/components/CustomHeader';
import { Modal } from './shared/components/Modal';
import { TaskForm } from './taskly/components/TaskForm';
import { TaskList } from './taskly/components/TaskList';
import { useTask } from './taskly/hooks/useTask';
import { useTasklyUI } from './taskly/hooks/useTasklyUI';

export const TasklyApp = () => {
  const { modal, filterIsOpen, handleModal, handleFilter } = useTasklyUI();
  const {
    filter,
    filteredTasks,
    handleCreateTask,
    handleCompletedTask,
    handleFilterChange,
  } = useTask();
  return (
    <>
      <CustomHeader
        isOpen={filterIsOpen}
        onAddClicked={handleModal}
        onFilterClicked={handleFilter}
        onFilterItemClick={handleFilterChange}
        filter={filter}
      />

      <TaskList
        filter={filter}
        tasks={filteredTasks}
        onDoneClick={handleCompletedTask}
      />

      <Modal
        componentToShow="create"
        current={modal}
        onOVerlayClicked={handleModal}
      >
        <TaskForm
          mode="create"
          formTitle="Create Taskly"
          buttonName="Create"
          onCloseClick={handleModal}
          onCreateClick={handleCreateTask}
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
