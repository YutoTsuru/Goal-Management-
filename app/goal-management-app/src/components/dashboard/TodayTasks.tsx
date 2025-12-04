import React from 'react';

const TodayTasks: React.FC = () => {
    // Sample tasks data
    const tasks = [
        { id: 1, title: 'Math Homework', dueDate: '2023-10-01', completed: false },
        { id: 2, title: 'Science Project', dueDate: '2023-10-05', completed: false },
        { id: 3, title: 'History Essay', dueDate: '2023-10-10', completed: true },
    ];

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Today's Tasks</h2>
            <ul className="space-y-2">
                {tasks.map(task => (
                    <li key={task.id} className={`flex justify-between p-2 border rounded ${task.completed ? 'bg-green-100' : 'bg-red-100'}`}>
                        <span className={`${task.completed ? 'line-through' : ''}`}>{task.title}</span>
                        <span>{task.dueDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodayTasks;