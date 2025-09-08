interface Props {
  onCloseModal: () => void;
}

export const CreateTaskly = ({ onCloseModal }: Props) => {
  return (
    <form className="create-form">
      <input placeholder="Task Title" type="text" />
      <textarea placeholder="Task Description" name="" id=""></textarea>
      <div>
        <button>add</button>
        <button onClick={onCloseModal}>close</button>
      </div>
    </form>
  );
};
