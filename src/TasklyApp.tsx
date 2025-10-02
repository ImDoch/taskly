import { CustomHeader } from './shared/components/CustomHeader';
import { Modal } from './shared/components/Modal';
import { TaskDetails } from './taskly/components/TaskDetails';
import { TaskForm } from './taskly/components/TaskForm';
import { TaskList } from './taskly/components/TaskList';
import { useTask } from './taskly/hooks/useTask';
import { useTasklyUI } from './taskly/hooks/useTasklyUI';

export const TasklyApp = () => {
  const {
    modal,
    filterIsOpen,
    optionsIsOpen,
    handleModal,
    handleFilter,
    handleOptions,
  } = useTasklyUI();
  const {
    filter,
    filteredTasks,
    seletedTask,
    handleCreateTask,
    handleCompletedTask,
    handleFilterChange,
    handleSeletedTask,
    handleEditTask,
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
        onTaskClick={handleSeletedTask}
        filter={filter}
        tasks={filteredTasks}
        onDoneClick={handleCompletedTask}
        onCardClick={handleModal}
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
          onEditClick={handleEditTask}
        />
      </Modal>

      <Modal
        componentToShow="details"
        current={modal}
        onOVerlayClicked={handleModal}
      >
        <TaskDetails
          task={seletedTask}
          isOpen={optionsIsOpen}
          onClickModalSetter={handleModal}
          onOptionsClick={handleOptions}
        />
      </Modal>

      <Modal
        componentToShow="edit"
        current={modal}
        onOVerlayClicked={handleModal}
      >
        <TaskForm
          formTitle="Edit Taskly"
          buttonName="Edit"
          mode="edit"
          onCloseClick={handleModal}
          onCreateClick={handleCreateTask}
          task={seletedTask ?? undefined}
          onEditClick={handleEditTask}
        />
      </Modal>
    </>
  );
};
