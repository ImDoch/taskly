import { FunnelIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import type { ModalName } from '../../taskly/hooks/useTasklyUI';

interface Props {
  isOpen: boolean;
  onAddClicked: (modalName: ModalName) => void;
  onFilterClicked: () => void;
}

export const CustomHeader = ({
  isOpen,
  onAddClicked,
  onFilterClicked,
}: Props) => {
  return (
    <header className="h-16 p-3 relative flex justify-between items-center border-b border-gray-300">
      <h1 className="font-bold text-3xl">Taskly</h1>

      <ul className="hidden md:flex justify-center items-center gap-2.5">
        <li className="status-filter">All</li>
        <li className="status-filter">Completed</li>
        <li className="status-filter">Pending</li>
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
        <ul className="p-2 absolute right-16 top-16 text-center rounded-2xl border border-gray-300 bg-gray-100">
          <li className="status-filter">All</li>
          <li className="status-filter">Completed</li>
          <li className="status-filter">Pending</li>
        </ul>
      )}
    </header>
  );
};
