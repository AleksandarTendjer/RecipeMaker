import SelectButtonGroup from '../ButtonGroups/SelectButtonGroup';
const FilterContainer = ({ isVisible }) => {
  return (
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isVisible ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg mt-4 w-full max-w-md`}
      style={{ height: isVisible ? 'auto' : '0' }}
    >
      {' '}
      {/* Add your filter options here */}
      <SelectButtonGroup />
    </div>
  );
};
export default FilterContainer;
