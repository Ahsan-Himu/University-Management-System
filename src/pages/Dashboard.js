// src/pages/Dashboard.js

import React from 'react';
//import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Component 1</h3>
          <p className="text-gray-700">Details about component 1...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Component 2</h3>
          <p className="text-gray-700">Details about component 2...</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Component 3</h3>
          <p className="text-gray-700">Details about component 3...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
