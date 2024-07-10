import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-4xl font-bold">
        UMS
      </div>
      
      {/* Navigation Tabs */}
      <nav className="flex flex-1 justify-center space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `hover:text-gray-400  ${isActive ? 'text-gray-200 border-b-2 border-gray-300' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/result" 
          className={({ isActive }) => 
            `hover:text-gray-400  ${isActive ? 'text-gray-200 border-b-2 border-gray-300' : ''}`
          }
        >
          Result
        </NavLink>
        <NavLink 
          to="/notice" 
          className={({ isActive }) => 
            `hover:text-gray-400 ${isActive ? 'text-gray-200 border-b-2 border-gray-300' : ''}`
          }
        >
          Notice
        </NavLink>
        <NavLink 
          to="/attendance" 
          className={({ isActive }) => 
            `hover:text-gray-400 ${isActive ? 'text-gray-200 border-b-2 border-gray-300' : ''}`
          }
        >
          Attendance
        </NavLink>
      </nav>
      
      {/* Search Box and Profile Icon */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <input 
          type="text" 
          placeholder="Search...                        |o" 
          className="p-1 rounded border border-gray-500 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300"
        />
        {/* Profile Icon */}
        <NavLink to="/profile">
          <FaUserCircle className="text-4xl hover:text-gray-400" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
