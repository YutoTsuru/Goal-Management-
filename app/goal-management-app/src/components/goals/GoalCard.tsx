import React from 'react';

interface GoalCardProps {
    title: string;
    description: string;
    progress: number; // Progress in percentage
    deadline: string; // Deadline in YYYY-MM-DD format
    onEdit: () => void; // Function to handle edit action
    onDelete: () => void; // Function to handle delete action
}

const GoalCard: React.FC<GoalCardProps> = ({ title, description, progress, deadline, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <div className="mt-2">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Progress: {progress}%</span>
                    <span className="text-sm text-gray-500">Deadline: {deadline}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div
                        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                        style={{ width: `${progress}%` }}
                    >
                        {progress}%
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-between">
                <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Edit
                </button>
                <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default GoalCard;