import { BsFilter } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
interface Props {
  title: string;
  children?: React.ReactNode;

  onAddClicked: () => void;
  onFilterClicked: () => void;
}

export const CustomHeader = ({
  title,
  children,
  onAddClicked: onCreateTasklyModal,
  onFilterClicked,
}: Props) => {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        <button onClick={onFilterClicked} className="filter">
          <BsFilter />
          Filter
        </button>
        <button onClick={onCreateTasklyModal} className="add">
          <MdAdd className="icon" />
        </button>
      </div>
      {children && <>{children}</>}
    </header>
  );
};
