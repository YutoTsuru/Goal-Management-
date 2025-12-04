import React from 'react';
import TodayTasks from '../../components/dashboard/TodayTasks';
import ProgressSummary from '../../components/dashboard/ProgressSummary';
import PerformanceChart from '../../components/dashboard/PerformanceChart';
import './Dashboard.module.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <TodayTasks />
            <ProgressSummary />
            <PerformanceChart />
        </div>
    );
};

export default Dashboard;