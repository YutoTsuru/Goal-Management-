import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-5">
            <h2 className="text-2xl font-bold mb-5">Student Goals</h2>
            <ul>
                <li className="mb-3">
                    <Link to="/" className="hover:text-gray-400">Dashboard</Link>
                </li>
                <li className="mb-3">
                    <Link to="/goals" className="hover:text-gray-400">Goals</Link>
                </li>
                <li className="mb-3">
                    <Link to="/progress" className="hover:text-gray-400">Progress</Link>
                </li>
                <li className="mb-3">
                    <Link to="/settings" className="hover:text-gray-400">Settings</Link>
                </li>
            </ul>
            <div className="mt-10">
                <h3 className="text-lg font-semibold">User Info</h3>
                <p className="text-sm">Name: John Doe</p>
                <p className="text-sm">Email: john.doe@example.com</p>
            </div>
        </div>
    );
};

export default Sidebar;