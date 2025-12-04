import React, { useState } from 'react';

const FoodLog: React.FC = () => {
    const [foodEntries, setFoodEntries] = useState<{ id: number; name: string; calories: number }[]>([]);
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState(0);

    const addFoodEntry = () => {
        if (foodName && calories > 0) {
            const newEntry = { id: Date.now(), name: foodName, calories };
            setFoodEntries([...foodEntries, newEntry]);
            setFoodName('');
            setCalories(0);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Food Log</h2>
            <div className="my-4">
                <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="Food Name"
                    className="border p-2 mr-2"
                />
                <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))}
                    placeholder="Calories"
                    className="border p-2 mr-2"
                />
                <button onClick={addFoodEntry} className="bg-blue-500 text-white p-2">
                    Add
                </button>
            </div>
            <ul>
                {foodEntries.map((entry) => (
                    <li key={entry.id} className="flex justify-between">
                        <span>{entry.name}</span>
                        <span>{entry.calories} kcal</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodLog;