import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <h1 className="text-2xl font-bold">Goal Management</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/goals" className="hover:underline">Goals</a></li>
                    <li><a href="/tasks" className="hover:underline">Tasks</a></li>
                    <li><a href="/health" className="hover:underline">Health</a></li>
                    <li><a href="/journal" className="hover:underline">Journal</a></li>
                    <li><a href="/social" className="hover:underline">Social</a></li>
                    <li><a href="/profile" className="hover:underline">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;