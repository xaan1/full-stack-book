


import React from 'react';

const Dashboard = () => {
  // Static data as placeholders
  const totalBooksSold = 120;
  const totalUsers = 85;
  const totalRevenue = 5400; // in dollars

  return (
    <div className="p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Bookstore Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card for Books Sold */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-700">Books Sold</h3>
          <p className="text-4xl font-bold text-blue-500 mt-2">{totalBooksSold}</p>
        </div>

        {/* Card for Total Users */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-4xl font-bold text-green-500 mt-2">{totalUsers}</p>
        </div>

        {/* Card for Revenue */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-4xl font-bold text-purple-500 mt-2">${totalRevenue}</p>
        </div>
      </div>
    </div>
  );
};




export default Dashboard