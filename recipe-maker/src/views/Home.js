import { AnimatedText } from '../components/Animations/AnimatedText';
import SearchBar from '../components/Forms/SearchBar';
import { useState, createContext, useEffect } from 'react';
import ApiService from '../services/ApiService';
import { MoreIcon } from '../assets/icons';
import FilterContainer from '../components/Filters/FilterContainer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ObjModel from '../components/Animations/ObjModel';

import tomatoObj from '../assets/objects/tomato.obj';
import TomatoMtl from '../assets/objects/tomato.mtl';

export const FilterContext = createContext(null);
const Home = () => {
  const edamamUrl = 'https://api.edamam.com/search';
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const diets = [
    { label: 'Vegetarian', value: 'vegetarian' },
    { label: 'Vegan', value: 'vegan' },
    { label: 'Pescatarian', value: 'pescatarian' },
    { label: 'Pork-free', value: 'pork-free' },
    { label: 'Keto', value: 'keto' },
    { label: 'High-Fiber', value: 'high-fiber' },
  ];
  const allergies = [
    { label: 'Gluten', value: 'gluten' },
    { label: 'Peanuts', value: 'peanuts' },
    { label: 'Shellfish', value: 'shellfish' },
    { label: 'Soy', value: 'soy' },
    { label: 'Dairy', value: 'dairy' },
  ];

  const getSelectedItemsFromStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key)) || {};
    const { savedItems, expiration } = data;
    if (!expiration || new Date(expiration) < new Date()) {
      localStorage.removeItem(key);
      return [];
    }
    return savedItems;
  };

  const [selectedDiets, setSelectedDiets] = useState(
    getSelectedItemsFromStorage('selectedDiets'),
  );

  const [selectedAllergies, setSelectedAllergies] = useState(
    getSelectedItemsFromStorage('selectedAllergies'),
  );

  useEffect(() => {
    const setItemToStorage = (key, selectedItems) => {
      const expiration = new Date();
      expiration.setTime(expiration.getTime() + 30 * 60 * 1000);
      localStorage.setItem(
        key,
        JSON.stringify({
          savedItems: selectedItems,
          expiration: expiration.toISOString(),
        }),
      );
    };

    setItemToStorage('selectedAllergies', selectedAllergies);
    setItemToStorage('selectedDiets', selectedDiets);
  }, [selectedAllergies, selectedDiets]);

  const handleSearch = async () => {
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
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-600 bg-opacity-40 backdrop-blur">
      <Canvas className="mb-2 h-2/5 w-max">
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={true}
          minDistance={5}
          maxDistance={10}
          target={[0, 0, 0]}
        />
        <ObjModel
          objectUrl={tomatoObj}
          materialUrl={TomatoMtl}
          position={[0, -0.5, 3]}
        />
      </Canvas>
      <section className="mb-10 flex flex-col items-center justify-center text-center">
        <AnimatedText
          text={'Craving Something Delicious?'}
          className={
            'xs:text-[50px] mb-4 text-[80px] text-gray-300 dark:text-white'
          }
        />
        <p className="text-[20px] text-slate-300 md:text-[30px] dark:text-white">
          Discover amazing recipes with the ingredients you have! Let's turn
          your kitchen into a culinary playground.
        </p>
      </section>

      <div className="flex w-full max-w-md flex-row items-center justify-center rounded-lg bg-white p-4 shadow-lg dark:bg-slate-500">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          OnSearch={handleSearch}
          className={'flex w-full items-center rounded-full bg-gray-200 p-2'}
        />
        <div
          onClick={handleFilterToggle}
          className="ml-4 flex h-8 w-8 cursor-pointer rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          <MoreIcon className={'h-8 w-8'} />
        </div>
      </div>
      <FilterContext.Provider
        value={{
          selectedAllergies,
          setSelectedAllergies,
          allergies,
          selectedDiets,
          setSelectedDiets,
          diets,
        }}
      >
        <FilterContainer
          isVisible={isFilterVisible}
          setIsFilterVisible={setIsFilterVisible}
        />
      </FilterContext.Provider>

      <ul></ul>
    </div>
  );
};

export default Home;
