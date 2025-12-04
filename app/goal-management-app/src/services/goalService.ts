import axios from 'axios';
import { Goal } from '../types';

const API_URL = '/api/goals';

export const getGoals = async (): Promise<Goal[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createGoal = async (goal: Goal): Promise<Goal> => {
    const response = await axios.post(API_URL, goal);
    return response.data;
};

export const updateGoal = async (goalId: string, updatedGoal: Partial<Goal>): Promise<Goal> => {
    const response = await axios.put(`${API_URL}/${goalId}`, updatedGoal);
    return response.data;
};

export const deleteGoal = async (goalId: string): Promise<void> => {
    await axios.delete(`${API_URL}/${goalId}`);
};