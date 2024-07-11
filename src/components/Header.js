import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4">
      {/* Logo */}
      <div className="text-2xl font-bold">UMS</div>
      
      {/* Navigation */}
      <nav className="flex space-x-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `relative hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`
          }
        >
          Home
          {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => 
            `relative hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`
          }
        >
          Login
          {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
        </NavLink>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `relative hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`
          }
        >
          Dashboard
          {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
        </NavLink>
        <NavLink 
          to="/notice" 
          className={({ isActive }) => 
            `relative hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`
          }
        >
          Notice
          {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
        </NavLink>
        <NavLink 
          to="/attendance" 
          className={({ isActive }) => 
            `relative hover:text-yellow-400 ${isActive ? 'text-yellow-400' : 'text-white'}`
          }
        >
          Attendance
          {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
        </NavLink>
      </nav>
      
      {/* Search Box and Profile Icon */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 pl-10 rounded border border-gray-500 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 shadow-inner"
          />
          <button className="absolute right-0 top-0 bottom-0 p-2 text-gray-400 hover:text-white flex items-center">
            <FaSearch />
          </button>
        </div>
        
        {/* Profile Icon */}
        <NavLink to="/profile">
          <FaUserCircle className="text-2xl hover:text-gray-400" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
