// App.jsx
import { apis } from './data/data.js'; // import JSON
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import SideMenu from './components/SideMenu.jsx';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const categories = ["All", "Gaming", "Weather", "Finance", "Entertainment"];
  const navigate = useNavigate();

  // Load JSON once
  useEffect(() => {
    setApiData(apis);
    setFilteredData(apis);
  }, []);

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredData(apiData);
    } else {
      setFilteredData(apiData.filter(api => api.api_category === category));
    }
  };

  const handleSearch = (query) => {
    setFilteredData(apiData.filter(api =>
      api.api_title.toLowerCase().includes(query.toLowerCase()) ||
      api.api_description.toLowerCase().includes(query.toLowerCase())
    ));
  };

  return (
    <div className='main h-screen bg-[#F9FAFB] flex flex-col'>
      <Navbar />
      <div className='flex flex-1 h-full'>
        <SideMenu 
          categories={categories} 
          handleFilter={handleFilter} 
          handleSearch={handleSearch} 
        />
        <div className='flex-1 overflow-auto p-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10'>
            {filteredData.map((api, key) => (
              <Card  
                key={key}
                id={api.id}
                img={api.api_img}
                title={api.api_title}
                category={api.api_category}
                description={api.api_description}
                handleNavigate={handleNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;






