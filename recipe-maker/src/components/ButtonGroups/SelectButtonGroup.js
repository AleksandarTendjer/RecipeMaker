import React, { useContext } from 'react';
import { FilterContext } from '../../views/Home';

const SelectButtonGroup = () => {
  const { selectedFoodTypes, setSelectedFoodTypes, foodTypes } =
    useContext(FilterContext);
  console.log('food types', foodTypes);
  const handleSelect = (foodType) => {
    if (selectedFoodTypes.includes(foodType)) {
      setSelectedFoodTypes(
        selectedFoodTypes.filter((type) => type !== foodType),
      );
    } else {
      setSelectedFoodTypes([...selectedFoodTypes, foodType]);
    }
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 ">
      {foodTypes.map((foodType) => (
        <div
          key={foodType}
          onClick={() => handleSelect(foodType)}
          className={`cursor-pointer p-4 rounded-lg hover:cursor-pointer hover:bg-slate-300 justify-center items-center ${
            selectedFoodTypes.includes(foodType)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } focus:outline-none`}
        >
          {foodType?.label}
        </div>
      ))}
    </div>
  );
};
export default SelectButtonGroup;
