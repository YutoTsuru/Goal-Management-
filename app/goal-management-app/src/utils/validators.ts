export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    return password.length >= 8;
};

export const validateGoal = (goal: string): boolean => {
    return goal.trim().length > 0;
};

export const validateTask = (task: string): boolean => {
    return task.trim().length > 0;
};

export const validateSleepHours = (hours: number): boolean => {
    return hours >= 0 && hours <= 24;
};

export const validateMoodIndex = (index: number): boolean => {
    return index >= 1 && index <= 10;
};