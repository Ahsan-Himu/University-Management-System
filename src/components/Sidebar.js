import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaChalkboardTeacher, FaBook, FaCalendarAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-gray-700 text-white w-64 min-h-screen p-4">
      <ul className="space-y-4">
        <li>
          <NavLink 
            to="/students"
            className={({ isActive }) => 
              `flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-600 ${isActive ? 'bg-gray-600 text-yellow-400' : ''}`
            }
          >
            <FaUsers className="text-xl" />
            <span>Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/faculties"
            className={({ isActive }) => 
              `flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-600 ${isActive ? 'bg-gray-600 text-yellow-400' : ''}`
            }
          >
            <FaChalkboardTeacher className="text-xl" />
            <span>Faculties</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/courses"
            className={({ isActive }) => 
              `flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-600 ${isActive ? 'bg-gray-600 text-yellow-400' : ''}`
            }
          >
            <FaBook className="text-xl" />
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/batch"
            className={({ isActive }) => 
              `flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-600 ${isActive ? 'bg-gray-600 text-yellow-400' : ''}`
            }
          >
            <FaCalendarAlt className="text-xl" />
            <span>Batch</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/settings"
            className={({ isActive }) => 
              `flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-600 ${isActive ? 'bg-gray-600 text-yellow-400' : ''}`
            }
          >
            <FaCog className="text-xl" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
