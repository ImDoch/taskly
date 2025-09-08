import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { Modal } from './shared/components/Modal';
import { CreateTaskly } from './taskly/components/CreateTaskly';
import { Filter } from './shared/components/Filter';
import { TasklyList } from './taskly/components/TasklyList';
import type { Taskly } from './taskly/components/interfaces/taskly.interface';
import { TasklyDetails } from './taskly/components/TasklyDetails';

export const TasklyApp = () => {
  const [modal, setModal] = useState<'none' | 'create' | 'detail'>('none');
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const [tasklys, setTasklys] = useState<Taskly[]>([]);
  const [selectedTaskly, setSelectedTaskly] = useState<Taskly | null>(null);

  const filters = ['completed', 'pending'];

  const handleCreateTasklyModal = () => {
    setModal('create');
  };

  const handleDetailModal = () => {
    setModal('detail');
  };

  const handleCloseModal = () => {
    setModal('none');
  };

  const handleToggleFilters = () => {
    setFiltersIsOpen((prev) => !prev);
  };

  const handleCreateTaskly = (
    tasklyTitle: string,
    tasklyDescription: string
  ) => {
    if (!tasklyTitle.length || !tasklyDescription.length) return;
    const normalizedTasklyTitle = tasklyTitle.trim();
    const normalizedTasklyDescription = tasklyDescription.trim();

    const newTaskly: Taskly = {
      title: normalizedTasklyTitle,
      description: normalizedTasklyDescription,
      completed: false,
    };

    setTasklys((prev) => [newTaskly, ...prev]);
  };

  const handleCard = (taskly: Taskly) => {
    handleDetailModal();
    setSelectedTaskly(taskly);
  };

  const handleCompletedTaskly = (tasklyToUpdate: Taskly) => {
    setTasklys((prev) => {
      return prev.map((taskly) =>
        taskly.title === tasklyToUpdate.title
          ? { ...taskly, completed: true }
          : taskly
      );
    });
    setSelectedTaskly({ ...tasklyToUpdate, completed: true });
  };

  return (
    <>
      <CustomHeader
        title="Taskly"
        onAddClicked={handleCreateTasklyModal}
        onFilterClicked={handleToggleFilters}
      >
        <Filter isOpen={filtersIsOpen} filters={filters} />
      </CustomHeader>

      <TasklyList tasklys={tasklys} onCardClicked={handleCard} />

      <Modal
        componentToShow="create"
        current={modal}
        onOverlayClicked={handleCloseModal}
      >
        <CreateTaskly
          onCloseModal={handleCloseModal}
          onAddClicked={handleCreateTaskly}
        />
      </Modal>

      <Modal
        componentToShow="detail"
        current={modal}
        onOverlayClicked={handleCloseModal}
      >
        {selectedTaskly && (
          <TasklyDetails
            taskly={selectedTaskly}
            onCloseClicked={handleCloseModal}
            onCompletedClicked={handleCompletedTaskly}
          />
        )}
      </Modal>
    </>
  );
};
