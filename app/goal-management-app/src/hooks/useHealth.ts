import { useState, useEffect } from 'react';

interface HealthData {
  sleepHours: number;
  foodLog: string[];
  moodIndex: number;
}

const useHealth = () => {
  const [healthData, setHealthData] = useState<HealthData>({
    sleepHours: 0,
    foodLog: [],
    moodIndex: 0,
  });

  const fetchHealthData = async () => {
    // Fetch health data from an API or local storage
    // This is a placeholder for the actual data fetching logic
    const data = await fetch('/api/health'); // Adjust the API endpoint as needed
    const json = await data.json();
    setHealthData(json);
  };

  useEffect(() => {
    fetchHealthData();
  }, []);

  const updateHealthData = (newData: Partial<HealthData>) => {
    setHealthData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return {
    healthData,
    updateHealthData,
  };
};

export default useHealth;