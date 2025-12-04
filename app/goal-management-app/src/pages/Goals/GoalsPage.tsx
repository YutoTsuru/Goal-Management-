import React, { useContext } from 'react';
import { GoalContext } from '../../contexts/GoalContext';
import GoalCard from '../../components/goals/GoalCard';
import GoalForm from '../../components/goals/GoalForm';

const GoalsPage: React.FC = () => {
    const { goals } = useContext(GoalContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">目標設定</h1>
            <GoalForm />
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">あなたの目標</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {goals.map(goal => (
                        <GoalCard key={goal.id} goal={goal} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoalsPage;