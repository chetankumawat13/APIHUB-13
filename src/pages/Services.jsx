import React from 'react';

const Services = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
        <li>API Directory: Explore categorized APIs with detailed info.</li>
        <li>Search & Filter: Quickly find APIs by name, description, or category.</li>
        <li>API Documentation: View detailed API endpoints and usage instructions.</li>
        <li>Add New APIs: Submit your own APIs to the Hub-13 platform.</li>
        <li>Responsive Design: Works perfectly on desktop and mobile devices.</li>
      </ul>
    </div>
  );
};

export default Services;
