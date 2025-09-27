import { XMarkIcon } from '@heroicons/react/16/solid';
import type { ModalName } from '../hooks/useTasklyUI';
import { useState } from 'react';

interface Props {
  formTitle: string;
  buttonName: string;
  taskTitle?: string;
  taskDescription?: string;
  onCloseClick: (modalName: ModalName) => void;
  onCreateClick: (title: string, description: string) => void;
}

export const TaskForm = ({
  formTitle,
  buttonName,
  taskTitle,
  taskDescription,
  onCloseClick,
  onCreateClick,
}: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="relative">
      <h2 className="mb-2 text-xl">{formTitle}</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white "
            type="text"
            placeholder="Task Title"
            onChange={(event) => setTitle(event.target.value)}
            value={taskTitle?.length ? taskTitle : title}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="h-24 max-h-24 p-1 rounded-md border border-gray-300 resize-none [field-sizing:content] focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white"
            id="description"
            placeholder="Task Description"
            onChange={(event) => setDescription(event.target.value)}
            value={taskDescription?.length ? taskDescription : description}
          ></textarea>
        </div>
        <button
          onClick={(event) => {
            event.preventDefault();
            onCreateClick(title, description);
            onCloseClick('none');
          }}
          className="px-3 py-2 self-end rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-200"
        >
          {buttonName}
        </button>
      </form>
      <button
        onClick={() => onCloseClick('none')}
        className="absolute -top-1 -right-1 rounded-full bg-white cursor-pointer"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
};
