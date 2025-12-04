import axios from 'axios';

const API_URL = 'https://api.example.com/health'; // Replace with your actual API URL

export const getHealthData = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching health data:', error);
        throw error;
    }
};

export const updateHealthData = async (userId: string, healthData: any) => {
    try {
        const response = await axios.put(`${API_URL}/${userId}`, healthData);
        return response.data;
    } catch (error) {
        console.error('Error updating health data:', error);
        throw error;
    }
};

export const logFoodIntake = async (userId: string, foodLog: any) => {
    try {
        const response = await axios.post(`${API_URL}/${userId}/food`, foodLog);
        return response.data;
    } catch (error) {
        console.error('Error logging food intake:', error);
        throw error;
    }
};

export const logSleepData = async (userId: string, sleepData: any) => {
    try {
        const response = await axios.post(`${API_URL}/${userId}/sleep`, sleepData);
        return response.data;
    } catch (error) {
        console.error('Error logging sleep data:', error);
        throw error;
    }
};

export const logMood = async (userId: string, moodData: any) => {
    try {
        const response = await axios.post(`${API_URL}/${userId}/mood`, moodData);
        return response.data;
    } catch (error) {
        console.error('Error logging mood:', error);
        throw error;
    }
};