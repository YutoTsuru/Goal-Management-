import { useState } from 'react';

const mockGoals = [
  { id: 1, title: 'Complete React project', progress: 70 },
  { id: 2, title: 'Study for exams', progress: 40 },
  { id: 3, title: 'Read 3 books this month', progress: 90 },
];

const useGoals = () => {
  const [goals, setGoals] = useState(mockGoals);

  const addGoal = (goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  const updateGoalProgress = (id, progress) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, progress } : goal
      )
    );
  };

  const removeGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return {
    goals,
    addGoal,
    updateGoalProgress,
    removeGoal,
  };
};

export default useGoals;