import React, { createContext, useContext, useState } from 'react';

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
    const [goals, setGoals] = useState([
        { id: 1, title: 'Complete React project', progress: 70 },
        { id: 2, title: 'Study for exams', progress: 40 },
        { id: 3, title: 'Read 3 books this month', progress: 20 },
    ]);

    return (
        <GoalsContext.Provider value={{ goals, setGoals }}>
            {children}
        </GoalsContext.Provider>
    );
};

export const useGoals = () => {
    return useContext(GoalsContext);
};