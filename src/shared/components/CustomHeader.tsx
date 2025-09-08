import { BsFilter } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
interface Props {
  title: string;

  onCreateTasklyModal: () => void;
}

export const CustomHeader = ({ title, onCreateTasklyModal }: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        <button className="filter">
          <BsFilter />
          Filter
        </button>
        <button onClick={onCreateTasklyModal} className="add">
          <MdAdd className="icon" />
        </button>
      </div>
    </header>
  );
};
