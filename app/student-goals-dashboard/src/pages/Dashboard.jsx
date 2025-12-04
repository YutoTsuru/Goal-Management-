import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GoalList from '../components/GoalList';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
    const [goals, setGoals] = useState([
        { id: 1, title: 'Complete React project', progress: 70 },
        { id: 2, title: 'Study for exams', progress: 40 },
        { id: 3, title: 'Read a book', progress: 20 },
    ]);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <ProgressBar goals={goals} />
                    <GoalList goals={goals} />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;