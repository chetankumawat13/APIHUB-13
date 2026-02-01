import React, { useState } from 'react';

const SideMenu = ({ categories, handleFilter, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value); // call search function from App.js
  };

  return (
    <div className='w-[25%] bg-white h-screen p-4 shadow-xl'>
      {/* Search */}
      <input
        type="search"
        placeholder='Search here'
        value={searchQuery}
        onChange={handleInputChange}
        className='w-full p-2 pl-2 rounded-md border border-gray-300'
      />
      <button
        onClick={() => handleSearch(searchQuery)}
        className='mt-2 w-full text-md bg-blue-600 text-white pt-1 pb-1 pl-3 pr-3 cursor-pointer rounded-md hover:bg-blue-700'
      >
        Search
      </button>

      {/* Categories */}
      <div className='mt-6'>
        <h4 className='font-semibold text-black text-lg'>Category</h4>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleFilter(cat)}
            className='block mt-2 text-black hover:text-blue-700'
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
