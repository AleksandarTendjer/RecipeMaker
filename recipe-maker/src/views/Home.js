import { AnimatedText } from '../components/Animations/AnimatedText';
import SearchBar from '../components/Forms/SearchBar';
import { useState } from 'react';
import ApiService from '../services/ApiService';
const Home = () => {
  const edamamUrl = 'https://api.edamam.com/search';
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = async () => {
    const params = {
      app_id: process.env.REACT_APP_APP_ID,
      app_key: process.env.REACT_APP_APPLICATION_KEY,
      q: searchTerm,
    };
    const data = await ApiService.fetchData(edamamUrl, params);
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen  flex-col">
      <AnimatedText
        text={'Hello!'}
        className={
          'mb-10 text-gray-500 dark:text-white text-[100px] xs:text-[50px]'
        }
      />
      <section className="justify-center items-center ">
        <AnimatedText
          text={
            "Hungry? Don't know what to make? Add what food you have and we'll make you a delicious dish."
          }
          className={
            'm-10 text-gray-500 dark:text-white md:text-[50px]  text-[20px] '
          }
          el="h3"
        />
      </section>
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/4 w-5/6 ">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          OnSearch={handleSearch}
        />
      </div>
      <ul></ul>
    </div>
  );
};
export default Home;
