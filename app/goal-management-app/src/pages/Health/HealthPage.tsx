import React from 'react';
import SleepChart from '../../components/health/SleepChart';
import FoodLog from '../../components/health/FoodLog';
import MoodIndicator from '../../components/health/MoodIndicator';

const HealthPage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Health Management</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Sleep Data</h2>
                <SleepChart />
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Food Log</h2>
                <FoodLog />
            </div>
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Mood Indicator</h2>
                <MoodIndicator />
            </div>
        </div>
    );
};

export default HealthPage;