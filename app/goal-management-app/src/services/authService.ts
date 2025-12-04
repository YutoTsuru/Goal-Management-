import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const registerUser = async (userData: { email: string; password: string; name: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const logoutUser = async () => {
    try {
        await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
        throw new Error('Logout failed');
    }
};

export const getCurrentUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/auth/current-user`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch current user');
    }
};