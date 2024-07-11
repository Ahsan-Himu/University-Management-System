import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Attendance from './pages/Attendance';
import Subjects from './pages/Subjects';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Faculties from './pages/Faculties';
import Batch from './pages/Batch';
import Courses from './pages/Courses';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Header />
        <Sidebar />
        <main className="flex-1 p-4 pt-16 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/batch" element={<Batch />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
