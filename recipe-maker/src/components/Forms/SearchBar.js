import React, { useState } from 'react';
import { ArrowBack, SearchIcon } from '../../assets/icons';

const SearchBar = ({ searchTerm, setSearchTerm, OnSearch }) => {
  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex items-center bg-gray-200 rounded-full p-2">
      <button
        onClick={handleClear}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-400 text-gray-700  dark:text-white focus:outline-none focus:bg-gray-500"
      >
        <ArrowBack className={'w-6 h-6'} />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="bg-transparent ml-2 outline-none placeholder-gray-500 text-gray-500 flex-grow"
      />
      <button
        onClick={OnSearch}
        className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        <SearchIcon classname={'w-6 h-6'} />
      </button>
    </div>
  );
};

export default SearchBar;
