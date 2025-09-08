import { useState } from 'react';

interface Props {
  onCloseModal: () => void;
  onAddClicked: (title: string, description: string) => void;
}

export const CreateTaskly = ({ onCloseModal, onAddClicked }: Props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <form className="create-form">
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        placeholder="Task Title"
        type="text"
      />
      <textarea
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        placeholder="Task Description"
      ></textarea>
      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            onAddClicked(title, description);
            onCloseModal();
          }}
        >
          add
        </button>
        <button onClick={onCloseModal}>close</button>
      </div>
    </form>
  );
};
