import { useState, useEffect } from 'react';
import { Goal } from '../types'; // Assuming you have a Goal type defined in your types directory
import { getGoals, createGoal, updateGoal, deleteGoal } from '../services/goalService';

const useGoals = () => {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const fetchedGoals = await getGoals();
                setGoals(fetchedGoals);
            } catch (err) {
                setError('Failed to fetch goals');
            } finally {
                setLoading(false);
            }
        };

        fetchGoals();
    }, []);

    const addGoal = async (goal: Goal) => {
        try {
            const newGoal = await createGoal(goal);
            setGoals((prevGoals) => [...prevGoals, newGoal]);
        } catch (err) {
            setError('Failed to add goal');
        }
    };

    const editGoal = async (goalId: string, updatedGoal: Partial<Goal>) => {
        try {
            const updated = await updateGoal(goalId, updatedGoal);
            setGoals((prevGoals) =>
                prevGoals.map((goal) => (goal.id === goalId ? updated : goal))
            );
        } catch (err) {
            setError('Failed to update goal');
        }
    };

    const removeGoal = async (goalId: string) => {
        try {
            await deleteGoal(goalId);
            setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
        } catch (err) {
            setError('Failed to delete goal');
        }
    };

    return {
        goals,
        loading,
        error,
        addGoal,
        editGoal,
        removeGoal,
    };
};

export default useGoals;