import { useState, useEffect, createContext, useContext } from 'react';
import { Task } from '../types';
import { getTasks, addTask, updateTask, deleteTask } from '../services/taskService';

const TaskContext = createContext<any>(null);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    
    useEffect(() => {
        const fetchTasks = async () => {
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        };
        fetchTasks();
    }, []);

    const createTask = async (task: Task) => {
        const newTask = await addTask(task);
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const editTask = async (taskId: string, updatedTask: Task) => {
        const updated = await updateTask(taskId, updatedTask);
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === taskId ? updated : task))
        );
    };

    const removeTask = async (taskId: string) => {
        await deleteTask(taskId);
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return (
        <TaskContext.Provider value={{ tasks, createTask, editTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    return useContext(TaskContext);
};