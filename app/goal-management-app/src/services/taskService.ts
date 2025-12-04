import axios from 'axios';
import { Task } from '../types';

const API_URL = '/api/tasks';

export const getTasks = async (): Promise<Task[]> => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
};

export const getTaskById = async (id: string): Promise<Task> => {
    const response = await axios.get<Task>(`${API_URL}/${id}`);
    return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
    const response = await axios.post<Task>(API_URL, task);
    return response.data;
};

export const updateTask = async (id: string, task: Task): Promise<Task> => {
    const response = await axios.put<Task>(`${API_URL}/${id}`, task);
    return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};