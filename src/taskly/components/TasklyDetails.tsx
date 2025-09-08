import type { Taskly } from './interfaces/taskly.interface';

interface Props {
  taskly: Taskly;
  onCloseClicked: () => void;
  onCompletedClicked: (taskly: Taskly) => void;
}

export const TasklyDetails = ({
  taskly,
  onCloseClicked,
  onCompletedClicked,
}: Props) => {
  return (
    <div>
      <div>
        <h2>{taskly.title}</h2>
        <p>{taskly.description}</p>
        <div>
          <div
            className={`status ${
              taskly.completed ? 'green-status' : 'red-status'
            }`}
          ></div>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            // onCloseClicked();
            onCompletedClicked(taskly);
          }}
        >
          Completed
        </button>
        <button onClick={onCloseClicked}>Close</button>
      </div>
    </div>
  );
};
