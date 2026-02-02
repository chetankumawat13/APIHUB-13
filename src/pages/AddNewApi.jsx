import React, { useState } from 'react';
import { saveApi } from "../data/storage";
import { useNavigate } from "react-router-dom";

const AddNewApi = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    api_title: "",
    api_description: "",
    api_category: "",
    api_img: ""
  });

  const handleData = (e) => {
    e.preventDefault();

    const newApi = {
      id: Date.now().toString(),
      ...data
    };

    saveApi(newApi);
    alert("API added successfully!");
    setData({
      api_title: "",
      api_description: "",
      api_category: "",
      api_img: ""
    });

    navigate("/");
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleData} className="bg-white p-6 rounded shadow-md w-1/3">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">API Title</h2>
          <input name="api_title" onChange={handleDataChange} value={data.api_title}
            className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">API Description</h2>
          <input name="api_description" onChange={handleDataChange} value={data.api_description}
            className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <input name="api_category" onChange={handleDataChange} value={data.api_category}
            className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Placeholder Img</h2>
          <input name="api_img" onChange={handleDataChange} value={data.api_img}
            className="border p-2 w-full rounded" />
        </div>

        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewApi;
