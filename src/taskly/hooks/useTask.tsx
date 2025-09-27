import { useState } from 'react';
import type { Task } from '../interfaces/Task';

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return {
    tasks,
    handleCreateTask,
  };
};
