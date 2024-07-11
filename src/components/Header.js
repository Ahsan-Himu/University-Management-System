import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Menu Button for Responsive */}
        <button className="block lg:hidden" onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold mx-auto lg:mx-0">UMS</div>

        {/* Search Box and Profile Icon */}
        <div className="flex items-center space-x-8">
          {/* Search Box */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 pr-12 pl-4 rounded-lg border border-gray-600 bg-gray-700 text-gray-50 placeholder-gray-400 focus:outline-none focus:border-gray-300 shadow-inner"
            />
            <button className="absolute right-0 top-0 bottom-0 p-2 text-gray-400 bg-gray-600 border-gray-500 rounded-r-lg hover:text-gray-50 hover:bg-gray-500 flex items-center justify-center">
              <FaSearch />
            </button>
          </div>

          {/* Profile Icon with Dropdown */}
          <ProfileDropdown />
        </div>
      </header>
      {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
    </>
  );
};

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleProfileClick = () => setIsOpen(!isOpen);

  // Close the dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative profile-dropdown">
      <button onClick={handleProfileClick}>
        <FaUserCircle className="text-2xl hover:text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
          <NavLink
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Profile
          </NavLink>
          <NavLink
            to="/auth"
            className="block px-4 py-2 hover:bg-gray-700"
          >
            Logout
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
