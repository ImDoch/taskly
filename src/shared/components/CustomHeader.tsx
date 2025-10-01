import { FunnelIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import type { ModalName } from '../../taskly/hooks/useTasklyUI';
import type { FilterTasks } from '../../taskly/hooks/useTask';

interface Props {
  isOpen: boolean;
  filter: FilterTasks;
  onAddClicked: (modalName: ModalName) => void;
  onFilterClicked: () => void;
  onFilterItemClick: (filter: FilterTasks) => void;
}

export const CustomHeader = ({
  isOpen,
  onAddClicked,
  onFilterClicked,
  onFilterItemClick,
  filter,
}: Props) => {
  return (
    <header className="h-16 p-3 relative flex justify-between items-center border-b border-gray-300">
      <h1 className="font-bold text-3xl">Taskly</h1>

      <ul className="hidden md:flex justify-center items-center gap-2.5">
        <li
          onClick={() => onFilterItemClick('all')}
          className={`status-filter ${
            filter === 'all' ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          All
        </li>
        <li
          onClick={() => onFilterItemClick('completed')}
          className={`status-filter ${
            filter === 'completed' ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          Completed
        </li>
        <li
          onClick={() => onFilterItemClick('pending')}
          className={`status-filter ${
            filter === 'pending' ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          Pending
        </li>
      </ul>

      <div className="flex justify-center items-center gap-2">
        <button
          onClick={onFilterClicked}
          className={`p-1.5 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-200 md:hidden ${
            isOpen && 'bg-gray-200'
          }`}
        >
          <FunnelIcon className="w-6 h-6 text-gray-700" />
          Filter
        </button>
        <button
          onClick={() => onAddClicked('create')}
          className="p-1.5 flex justify-center items-center gap-1 rounded-md cursor-pointer hover:bg-gray-200"
        >
          <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          Add
        </button>
      </div>

      {isOpen && (
        <ul className="p-2 absolute right-16 top-16 text-center rounded-2xl border border-gray-300 bg-gray-100 z-10">
          <li
            onClick={() => {
              onFilterItemClick('all');
              onFilterClicked();
            }}
            className={`status-filter ${
              filter === 'all' ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            All
          </li>
          <li
            onClick={() => {
              onFilterItemClick('completed');
              onFilterClicked();
            }}
            className={`status-filter ${
              filter === 'completed' ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            Completed
          </li>
          <li
            onClick={() => {
              onFilterItemClick('pending');
              onFilterClicked();
            }}
            className={`status-filter ${
              filter === 'pending' ? 'bg-gray-200' : 'bg-gray-100'
            }`}
          >
            Pending
          </li>
        </ul>
      )}
    </header>
  );
};
