import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaChalkboardTeacher, FaCalendar, FaUserGraduate, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-gray-100 w-64 h-screen p-4 mt-10">
      <div className="flex flex-col h-full justify-around">
        {/* Sidebar Links for Group 1 */}
        <div className="space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/notice"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaBook />
            <span>Notice</span>
          </NavLink>
          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaCalendar />
            <span>Attendance</span>
          </NavLink>
          <NavLink
            to="/subjects"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaBook />
            <span>Subjects</span>
          </NavLink>
        </div>

        {/* Sidebar Links for Group 2 */}
        <div className="mt-2 space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaChalkboardTeacher />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaUserGraduate />
            <span>Students</span>
          </NavLink>
          <NavLink
            to="/faculties"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaUsers />
            <span>Faculties</span>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaBook />
            <span>Courses</span>
          </NavLink>
          <NavLink
            to="/batch"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaCalendar />
            <span>Batch</span>
          </NavLink>
        </div>

        {/* Settings */}
        <div className=" border-t border-gray-700 pt-4 pb-8">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-800 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
