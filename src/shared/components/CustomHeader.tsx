import { FunnelIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export const CustomHeader = () => {
  return (
    <header className="h-16 p-3 flex justify-between items-center border-b border-gray-300">
      <h1 className="font-bold text-3xl">Taskly</h1>

      <ul className="hidden md:flex justify-center items-center gap-2.5">
        <li className="status-filter">All</li>
        <li className="status-filter">Completed</li>
        <li className="status-filter">Pending</li>
      </ul>

      <div className="flex justify-center items-center gap-2">
        <button className="p-1.5 flex justify-center items-center rounded-md cursor-pointer hover:bg-gray-200 md:hidden">
          <FunnelIcon className="w-6 h-6 text-gray-700" />
          Filter
        </button>
        <button className="p-1.5 flex justify-center items-center gap-1 rounded-xl cursor-pointer hover:bg-gray-200">
          <PlusCircleIcon className="w-6 h-6 text-gray-700" />
          Add
        </button>
      </div>
    </header>
  );
};
