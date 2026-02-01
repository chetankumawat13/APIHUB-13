// Docs.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apis } from '../data/data.js'; // import JSON

const Docs = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const api = apis.find(a => a.id === id);
    if (!api) return setData(null);

    const enhancedData = {
      ...api,
      endpoint: `https://api.example.com/${api.api_title.replace(/\s+/g,'').toLowerCase()}`,
      method: "GET",
      requestExample: `{ "param1": "value1" }`,
      responseExample: `{ "success": true, "data": {} }`,
      tags: api.tags || [api.api_category]
    };

    setData(enhancedData);
  }, [id]);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-semibold mb-4">API not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{data.api_title}</h1>
      <p className="mb-2"><strong>Category:</strong> {data.api_category}</p>
      <div className="mb-4">
        {data.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded mr-2 mb-2">{tag}</span>
        ))}
      </div>
      <p className="mb-4">{data.api_description}</p>

      <div className="mb-4">
        <p><strong>Endpoint:</strong> <code>{data.endpoint}</code></p>
        <p><strong>Method:</strong> {data.method}</p>
      </div>

      <div className="mb-4">
        <p className="font-semibold mb-1">Request Example:</p>
        <pre className="bg-gray-100 p-3 rounded text-sm">{data.requestExample}</pre>
      </div>

      <div className="mb-4">
        <p className="font-semibold mb-1">Response Example:</p>
        <pre className="bg-gray-100 p-3 rounded text-sm">{data.responseExample}</pre>
      </div>

      {data.api_img && (
        <div className="mb-4">
          <p className="font-semibold mb-2">Image / Screenshot:</p>
          <img src={data.api_img} alt={data.api_title} className="w-full max-w-md rounded shadow" />
        </div>
      )}
    </div>
  );
};

export default Docs;


