import React from 'react';

const ProgressSummary: React.FC = () => {
    // Sample data for progress summary
    const goals = [
        { title: 'Math Exam Preparation', progress: 75 },
        { title: 'English Essay', progress: 50 },
        { title: 'Science Project', progress: 30 },
    ];

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Progress Summary</h2>
            <ul>
                {goals.map((goal, index) => (
                    <li key={index} className="flex justify-between mb-2">
                        <span>{goal.title}</span>
                        <span>{goal.progress}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressSummary;