interface Props {
  isOpen: boolean;
  filters: string[];
}

export const Filter = ({ filters, isOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="filters-container">
          <ul>
            {filters.map((filter) => (
              <li key={filter}>{filter}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
