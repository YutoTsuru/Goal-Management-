import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-lg font-bold">Goal Management</h2>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="hover:bg-gray-700">
                        <Link to="/dashboard" className="block p-4">Dashboard</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/goals" className="block p-4">Goals</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/tasks" className="block p-4">Tasks</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/health" className="block p-4">Health</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/journal" className="block p-4">Journal</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/social" className="block p-4">Social</Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link to="/profile" className="block p-4">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;