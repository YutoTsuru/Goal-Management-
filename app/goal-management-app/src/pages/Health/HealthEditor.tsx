import React, { useState, useContext } from 'react';
import { HealthContext } from '../../contexts/HealthContext';

const HealthEditor: React.FC = () => {
    const { healthData, updateHealthData } = useContext(HealthContext);
    const [sleepHours, setSleepHours] = useState(healthData.sleepHours || 0);
    const [foodLog, setFoodLog] = useState(healthData.foodLog || '');
    const [moodIndex, setMoodIndex] = useState(healthData.moodIndex || 0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateHealthData({ sleepHours, foodLog, moodIndex });
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Health Editor</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Sleep Hours:</label>
                    <input
                        type="number"
                        value={sleepHours}
                        onChange={(e) => setSleepHours(Number(e.target.value))}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Food Log:</label>
                    <textarea
                        value={foodLog}
                        onChange={(e) => setFoodLog(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Mood Index (1-10):</label>
                    <input
                        type="number"
                        value={moodIndex}
                        onChange={(e) => setMoodIndex(Number(e.target.value))}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        min="1"
                        max="10"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            </form>
        </div>
    );
};

export default HealthEditor;