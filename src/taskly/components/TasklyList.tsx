import type { Taskly } from './interfaces/taskly.interface';

interface Props {
  tasklys: Taskly[];
  onCardClicked: (taskly: Taskly) => void;
}

export const TasklyList = ({ tasklys, onCardClicked }: Props) => {
  return (
    <section className="list-container">
      {tasklys.map((taskly) => (
        <article
          onClick={() => onCardClicked(taskly)}
          key={taskly.title}
          className="list-card"
        >
          <h2>{taskly.title}</h2>
          <div
            className={`status ${
              taskly.completed ? 'green-status' : 'red-status'
            }`}
          ></div>
        </article>
      ))}
    </section>
  );
};
