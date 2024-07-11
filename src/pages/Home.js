import React, { useState } from 'react';

const Home = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);

  return (
    <div className="flex flex-col justify-start min-h-screen bg-gray-100 space-y-4 pt-4 px-2 md:px-8">
      {/* Welcome Section */}
      <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-lg text-left h-32 sm:h-36 md:h-48">
        <h1 className="text-lg md:text-2xl font-bold">Welcome Ahsan Himu</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-between space-x-4 w-2/3 h-8 md:h-12">
        <button
          onClick={() => setShowAboutMe(true)}
          className={`px-4 py-2 rounded w-1/2 h-full flex items-center text-gray-50 justify-center text-sm md:text-2xl ${showAboutMe ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-500`}
        >
          About Me
        </button>
        <button
          onClick={() => setShowAboutMe(false)}
          className={`px-4 py-2 rounded w-1/2 h-full flex items-center text-gray-50 justify-center text-sm md:text-2xl ${!showAboutMe ? 'bg-gray-800' : 'bg-gray-600'} hover:bg-gray-500`}
        >
          Running Subjects
        </button>
      </div>

      {/* About Me Section */}
      {showAboutMe ? (
        <>
          <div className="grid grid-cols-3 gap-4 w-full h-28 md:h-48">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex items-center justify-center">
              <h3 className="text-sm md:text-lg font-bold">Total Subjects</h3>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex items-center justify-center">
              <h3 className="text-sm md:text-lg font-bold">Subjects Completed</h3>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex items-center justify-center">
              <h3 className="text-sm md:text-lg font-bold">Credits Completed</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] w-full">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex items-start justify-center">
              <h3 className="text-sm md:text-lg font-bold">Your Profile</h3>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center flex items-start justify-center">
              <h3 className="text-sm md:text-lg font-bold">Batch Coordination</h3>
            </div>
          </div>
        </>
      ) : (
        // Running Subjects Section
        <div className="w-full h-auto bg-white p-4 md:p-6 rounded-lg shadow-lg text-center overflow-auto">
          <h2 className="text-lg md:text-xl font-bold mb-4">Running Courses</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Sl No</th>
                <th scope="col" className="px-4 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Subject Name</th>
                <th scope="col" className="px-4 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Faculty</th>
                <th scope="col" className="px-4 md:px-6 py-2 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">Present</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Empty rows to be filled later */}
              {[...Array(9)].map((_, index) => (
                <tr key={index}>
                  <td className="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap"> </td>
                  <td className="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap"> </td>
                  <td className="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap"> </td>
                  <td className="px-4 md:px-6 py-2 md:py-4 whitespace-nowrap"> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
