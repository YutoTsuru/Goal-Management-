import React from 'react';

interface TaskItemProps {
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
    onToggleComplete: () => void;
    onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, description, dueDate, completed, onToggleComplete, onDelete }) => {
    return (
        <div className={`flex items-center justify-between p-4 border-b ${completed ? 'bg-green-100' : 'bg-white'}`}>
            <div>
                <h3 className={`text-lg font-semibold ${completed ? 'line-through' : ''}`}>{title}</h3>
                <p className="text-gray-600">{description}</p>
                <p className="text-sm text-gray-500">Due: {dueDate}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={onToggleComplete} className="px-2 py-1 text-white bg-blue-500 rounded">
                    {completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={onDelete} className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;