import React from 'react';
import ProgressBar from './ProgressBar';

const GoalCard = ({ goal }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <h3 className="text-lg font-semibold">{goal.title}</h3>
            <p className="text-gray-600">{goal.description}</p>
            <ProgressBar progress={goal.progress} />
            <div className="mt-2">
                <span className="text-sm text-gray-500">Due: {goal.dueDate}</span>
            </div>
        </div>
    );
};

export default GoalCard;