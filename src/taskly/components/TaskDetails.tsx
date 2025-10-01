import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/16/solid';
import type { Task } from '../interfaces/Task';
import type { ModalName } from '../hooks/useTasklyUI';

interface Props {
  task: Task | null;
  isOpen: boolean;
  onClickModalSetter: (modalName: ModalName) => void;
  onOptionsClick: (open?: boolean) => void;
}

export const TaskDetails = ({
  task,
  isOpen,
  onClickModalSetter,
  onOptionsClick,
}: Props) => {
  return (
    <div className="relative flex flex-col aspect-video">
      <h2 className="mb-2 text-xl">Taskly Details</h2>

      <div className="flex flex-col gap-1.5 ">
        <h3>{task?.title}</h3>
        <p className="text-pretty overflow-y-auto">{task?.description}</p>
      </div>

      <div
        onClick={() => onOptionsClick()}
        className="w-10 mt-auto p-1 flex justify-center items-center  rounded-md cursor-pointer hover:bg-gray-200"
      >
        <EllipsisHorizontalIcon className="w-6 h-6 text-gray-500" />
      </div>

      <button
        onClick={() => {
          onClickModalSetter('none');
          onOptionsClick(false);
        }}
        className="absolute -top-1 -right-1 rounded-full bg-white cursor-pointer"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <div
        className={`w-6 h-6 absolute bottom-0 right-0 rounded-full ${
          task?.completed ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></div>

      {isOpen && (
        <ul className="p-2 absolute bottom-8.5 -left-4 text-center rounded-2xl border border-gray-200 bg-gray-100">
          <li
            onClick={() => {
              onClickModalSetter('none');
              onClickModalSetter('edit');
              onOptionsClick(false);
            }}
            className="p-1 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            Edit
          </li>
          <li
            onClick={() => {
              onClickModalSetter('none');
              onOptionsClick(false);
            }}
            className="p-1 hover:bg-gray-200 rounded-md cursor-pointer"
          >
            Remove
          </li>
        </ul>
      )}
    </div>
  );
};
