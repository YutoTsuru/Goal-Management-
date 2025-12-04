import React from 'react';
import { useParams } from 'react-router-dom';
import { useGoals } from '../../hooks/useGoals';

const GoalDetail: React.FC = () => {
    const { goalId } = useParams<{ goalId: string }>();
    const { getGoalById } = useGoals();
    const goal = getGoalById(goalId);

    if (!goal) {
        return <div>Goal not found</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{goal.title}</h1>
            <p className="mt-2">{goal.description}</p>
            <div className="mt-4">
                <h2 className="text-xl">Details</h2>
                <p>Category: {goal.category}</p>
                <p>Priority: {goal.priority}</p>
                <p>Deadline: {goal.deadline}</p>
                <p>Progress: {goal.progress}%</p>
            </div>
        </div>
    );
};

export default GoalDetail;