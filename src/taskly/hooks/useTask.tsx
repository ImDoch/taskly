import { useState } from 'react';
import type { Task } from '../interfaces/Task';

export type FilterTasks = 'all' | 'completed' | 'pending';

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterTasks>('all');

  const handleCreateTask = (title: string, description: string) => {
    if (!title.length || !description.length) return;

    const normalizedTitle = title.trim();
    const normalizedDescription = description.trim();

    const newTask: Task = {
      title: normalizedTitle,
      description: normalizedDescription,
      completed: false,
    };

    setTasks((prev) => {
      const actualTasks = structuredClone(prev);

      return [...actualTasks, newTask];
    });
  };

  const handleCompletedTask = (taskToUpdate: Task) => {
    setTasks((prev) => {
      return prev.map((task) =>
        task.title === taskToUpdate.title
          ? { ...task, completed: !task.completed }
          : task
      );
    });
  };

  const handleFilterChange = (newFilter: FilterTasks) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return {
    tasks,
    filter,
    filteredTasks,
    handleCreateTask,
    handleCompletedTask,
    handleFilterChange,
  };
};
