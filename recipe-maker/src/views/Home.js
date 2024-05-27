import { AnimatedText } from '../components/Animations/AnimatedText';
import SearchBar from '../components/Forms/SearchBar';
import { useState, createContext, useEffect } from 'react';
import ApiService from '../services/ApiService';
import { MoreIcon } from '../assets/icons';
import FilterContainer from '../components/Filters/FilterContainer';
export const FilterContext = createContext(null);
const Home = () => {
  const edamamUrl = 'https://api.edamam.com/search';
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const foodTypes = [
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Pescatarian', value: 'pescatarian' },
    { label: 'Pork-free', value: 'pork-free' },
    { label: 'Keto', value: 'keto' },
    { label: 'High-Fiber', value: 'high-fiber' },
  ];
  const getSelectedFoodTypesFromStorage = () => {
    const savedFoodTypes =
      JSON.parse(localStorage.getItem('selectedFoodTypes')) || [];
    return savedFoodTypes;
  };
  const [selectedFoodTypes, setSelectedFoodTypes] = useState(
    getSelectedFoodTypesFromStorage,
  );

  useEffect(() => {
    localStorage.setItem(
      'selectedFoodTypes',
      JSON.stringify(selectedFoodTypes),
    );
  }, [selectedFoodTypes]);

  const handleSearch = async () => {
    console.log('Selected Food Types:', selectedFoodTypes);

    const params = {
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APPLICATION_KEY,
      q: searchTerm,
    };
    const data = await ApiService.fetchData(edamamUrl, params);
    console.log(data);
  };

  const handleFilterToggle = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  console.log(isFilterVisible);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-600 bg-opacity-40 backdrop-blur">
      <AnimatedText
        text={'Hello!'}
        className={
          'mb-10 text-gray-300 dark:text-white text-[100px] xs:text-[50px]'
        }
      />
      <section className="text-center">
        <AnimatedText
          text={
            "Hungry? Don't know what to make? Add what food you have and we'll make you a delicious dish."
          }
          className={
            'm-10 text-slate-300 dark:text-white md:text-[40px] text-[20px]'
          }
          el="h3"
        />
      </section>
      <div className="bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg w-full max-w-md flex flex-row items-center justify-center">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          OnSearch={handleSearch}
          className={'flex items-center bg-gray-200 rounded-full p-2 w-full'}
        />
        <div
          onClick={handleFilterToggle}
          className="flex h-8 w-8 rounded-full ml-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none cursor-pointer"
        >
          <MoreIcon className={'w-8 h-8'} />
        </div>
      </div>
      <FilterContext.Provider
        value={{ selectedFoodTypes, setSelectedFoodTypes, foodTypes }}
      >
        <FilterContainer isVisible={isFilterVisible} />
      </FilterContext.Provider>

      <ul></ul>
    </div>
  );
};

export default Home;
