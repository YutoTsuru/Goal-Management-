import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart: React.FC<{ data: number[] }> = ({ data }) => {
    const chartData = {
        labels: data.map((_, index) => `Week ${index + 1}`),
        datasets: [
            {
                label: 'Performance',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Performance Over Time</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default PerformanceChart;