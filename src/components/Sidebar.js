import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaChalkboardTeacher, FaCalendar, FaUserGraduate, FaCog, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`fixed pt-16 inset-0 z-40 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
      <div className="bg-gray-900 text-gray-100 w-64 h-screen p-4 space-y-6 lg:flex lg:flex-col lg:justify-between">
        {/* Close Button for Responsive */}
        <button className="absolute top-4 right-4 lg:hidden" onClick={toggleSidebar}>
          <FaTimes className="text-2xl text-white" />
        </button>
        {/* Sidebar Links for Group 1 */}
        <div className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/notice"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaBook />
            <span>Notice</span>
          </NavLink>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaCalendar />
            <span>Attendance</span>
          </NavLink>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaBook />
            <span>Subjects</span>
          </NavLink>
        </div>

        {/* Sidebar Links for Group 2 */}
        <div className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaChalkboardTeacher />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>
          <NavLink
            to="/faculties"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaUsers />
            <span>Faculties</span>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaBook />
            <span>Courses</span>
          </NavLink>
          <NavLink
            to="/batch"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 pt-2 pb-8 sm:py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaCalendar />
            <span>Batch</span>
          </NavLink>
        </div>

        {/* Settings */}
        <div className="border-t border-gray-700 pt-4">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 md:py-2 md:mb-20 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggleSidebar}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
