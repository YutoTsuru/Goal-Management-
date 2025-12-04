import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HealthData {
  sleepHours: number;
  foodLog: string[];
  moodIndex: number;
}

interface HealthContextType {
  healthData: HealthData;
  updateHealthData: (data: Partial<HealthData>) => void;
}

const HealthContext = createContext<HealthContextType | undefined>(undefined);

export const HealthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [healthData, setHealthData] = useState<HealthData>({
    sleepHours: 0,
    foodLog: [],
    moodIndex: 0,
  });

  const updateHealthData = (data: Partial<HealthData>) => {
    setHealthData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <HealthContext.Provider value={{ healthData, updateHealthData }}>
      {children}
    </HealthContext.Provider>
  );
};

export const useHealth = (): HealthContextType => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};