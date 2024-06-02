import React, { useContext } from 'react';
import { FilterContext } from '../../views/Home';

const SelectButtonGroup = () => {
  const { selectedFoodTypes, setSelectedFoodTypes, foodTypes } =
    useContext(FilterContext);

  const handleSelect = (clickedFoodType) => {
    const alreadyAdded = selectedFoodTypes.find(
      (selectedFoodType) => selectedFoodType.value === clickedFoodType.value,
    );
    alreadyAdded
      ? setSelectedFoodTypes(
          selectedFoodTypes.filter(
            (selectedFoodType) =>
              selectedFoodType.value !== clickedFoodType.value,
          ),
        )
      : setSelectedFoodTypes([...selectedFoodTypes, clickedFoodType]);
  };
  return (
    <ul className="grid grid-cols-3 grid-rows-2 gap-3 ">
      {foodTypes.map((foodType) => (
        <li
          key={foodType.label}
          onClick={() => handleSelect(foodType)}
          className={`cursor-pointer p-4 rounded-lg hover:cursor-pointer select-none hover:bg-slate-300   focus:outline-none justify-center items-center ${
            selectedFoodTypes.find(
              (alreadySelctFoodType) =>
                alreadySelctFoodType.value === foodType.value,
            )
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } focus:outline-none`}
        >
          {foodType?.label}
        </li>
      ))}
    </ul>
  );
};
export default SelectButtonGroup;
