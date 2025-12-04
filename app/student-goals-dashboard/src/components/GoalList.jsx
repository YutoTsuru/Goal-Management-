import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Today's Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {goals.map((goal) => (
                    <GoalCard key={goal.id} goal={goal} />
                ))}
            </div>
        </div>
    );
};

export default GoalList;