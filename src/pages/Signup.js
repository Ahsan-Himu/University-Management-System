import React from 'react';

const Signup = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-900" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-900" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
          <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 text-gray-900" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
