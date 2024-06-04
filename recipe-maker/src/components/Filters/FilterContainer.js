import React, { useContext, useEffect, useRef } from 'react';
import SelectButtonGroup from '../ButtonGroups/SelectButtonGroup';
import { FilterContext } from '../../views/Home';
import { Transition } from '@headlessui/react';

const FilterContainer = ({ isVisible, setIsFilterVisible }) => {
  const filterContainerRef = useRef();
  const {
    selectedAllergies,
    setSelectedAllergies,
    allergies,
    selectedDiets,
    setSelectedDiets,
    diets,
  } = useContext(FilterContext);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(event.target)
      ) {
        setIsFilterVisible(!isVisible);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [filterContainerRef]);
  return (
    <Transition
      show={isVisible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        ref={filterContainerRef}
        className="mt-4 w-full max-w-md rounded-lg bg-white p-4 shadow-lg dark:bg-slate-500"
      >
        <h2 className="mb-4 w-full text-center">Allergies</h2>
        <SelectButtonGroup
          selectedItems={selectedAllergies}
          setSelectedItems={setSelectedAllergies}
          items={allergies}
        />

        <h2 className="mb-4 mt-5 w-full text-center">Diets</h2>
        <SelectButtonGroup
          selectedItems={selectedDiets}
          setSelectedItems={setSelectedDiets}
          items={diets}
        />
      </div>
    </Transition>
  );
};

export default FilterContainer;
