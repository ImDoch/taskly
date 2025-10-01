import { useState } from 'react';
import type { Task } from '../interfaces/Task';
import type { FilterTasks } from '../hooks/useTask';
import type { ModalName } from '../hooks/useTasklyUI';

interface Props {
  tasks: Task[];
  filter: FilterTasks;
  onDoneClick: (task: Task) => void;
  onCardClick: (modalName: ModalName) => void;
  onTaskClick: (task: Task) => void;
}

export const TaskList = ({
  tasks,
  filter,
  onDoneClick,
  onCardClick,
  onTaskClick,
}: Props) => {
  const [completed, setCompleted] = useState(false);

  if (filter === 'all' && !tasks.length)
    return (
      <main className="h-[calc(100dvh-4rem)] display flex justify-center items-center">
        <section>
          <p>Let's start to track your tasks</p>
        </section>
      </main>
    );

  if (filter === 'completed' && !tasks.length)
    return (
      <main className="h-[calc(100dvh-4rem)] display flex justify-center items-center">
        <section>
          <p>You don't have completed tasks yet</p>
        </section>
      </main>
    );

  if (filter === 'pending' && !tasks.length)
    return (
      <main className="h-[calc(100dvh-4rem)] display flex justify-center items-center">
        <section>
          <p>You don't have pending tasks yet</p>
        </section>
      </main>
    );

  return (
    <main>
      <section className="p-6 grid grid-cols-[repeat(auto-fill,288px)] justify-center gap-4">
        {tasks.map((task) => {
          return (
            <article
              onClick={() => {
                onCardClick('details');
                onTaskClick(task);
              }}
              key={task.title}
              className="p-6 relative flex flex-col justify-between rounded-3xl aspect-[2/1] bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <div className="line-clamp-2">
                <h2 className="mb-2">{task.title}</h2>
                <p>{task.description}</p>
              </div>
              <div className="w-16 p-2 flex justify-center items-center self-end gap-1 rounded-md hover:bg-gray-400">
                <label
                  onClick={(event) => event.stopPropagation()}
                  htmlFor="done"
                  className="leading-none cursor-pointer"
                >
                  Done
                </label>
                <input
                  onClick={(event) => {
                    event.stopPropagation();
                    onDoneClick(task);
                  }}
                  id="done"
                  type="checkbox"
                  className="w-3 h-3 translate-y-[2px] cursor-pointer"
                  checked={completed}
                  onChange={(e) => setCompleted(e.target.checked)}
                />
              </div>
              <div
                className={`w-6 h-6 absolute right-4 rounded-full ${
                  task.completed ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></div>
            </article>
          );
        })}
      </section>
    </main>
  );
};
