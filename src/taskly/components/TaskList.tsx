import type { Task } from '../interfaces/Task';

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <main>
      <section className="p-6 grid grid-cols-[repeat(auto-fill,288px)] justify-center gap-4">
        {tasks.map((task) => {
          return (
            <article
              key={task.title}
              className="p-6 relative flex flex-col justify-between rounded-3xl aspect-square bg-gray-200 cursor-pointer hover:bg-gray-300"
            >
              <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
              </div>
              <div className="flex justify-end items-center gap-1">
                <label htmlFor="done" className="leading-none">
                  Done
                </label>
                <input
                  id="done"
                  type="checkbox"
                  className="w-3 h-3 translate-y-[1px]"
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
