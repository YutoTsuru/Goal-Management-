import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for request and response can be added here if needed

export const getGoals = async () => {
  const response = await apiClient.get('/goals');
  return response.data;
};

export const createGoal = async (goalData) => {
  const response = await apiClient.post('/goals', goalData);
  return response.data;
};

export const updateGoal = async (goalId, goalData) => {
  const response = await apiClient.put(`/goals/${goalId}`, goalData);
  return response.data;
};

export const deleteGoal = async (goalId) => {
  const response = await apiClient.delete(`/goals/${goalId}`);
  return response.data;
};

// Add more API functions as needed for tasks, health, journal, etc.