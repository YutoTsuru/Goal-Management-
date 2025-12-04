import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import GoalsPage from './pages/Goals/GoalsPage';
import TasksPage from './pages/Tasks/TasksPage';
import HealthPage from './pages/Health/HealthPage';
import JournalPage from './pages/Journal/JournalPage';
import SocialPage from './pages/Social/SocialPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/goals" element={<GoalsPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/social" element={<SocialPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;