import React from 'react';
import { Line } from 'react-chartjs-2';

const SleepChart: React.FC<{ sleepData: number[] }> = ({ sleepData }) => {
    const data = {
        labels: sleepData.map((_, index) => `Day ${index + 1}`),
        datasets: [
            {
                label: 'Sleep Hours',
                data: sleepData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Hours of Sleep',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Days',
                },
            },
        },
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Sleep Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default SleepChart;