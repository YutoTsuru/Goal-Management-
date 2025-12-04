export const calculateProgress = (current: number, target: number): number => {
    if (target === 0) return 0;
    return Math.min((current / target) * 100, 100);
};

export const averagePerformance = (performances: number[]): number => {
    if (performances.length === 0) return 0;
    const total = performances.reduce((acc, val) => acc + val, 0);
    return total / performances.length;
};

export const formatMetric = (value: number, type: 'percentage' | 'count'): string => {
    if (type === 'percentage') {
        return `${value.toFixed(2)}%`;
    }
    return value.toString();
};