import React from 'react';
import './Statistics.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Footer from '../Footer/Footer';
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
    const data = {
        labels: ['Assignment-1', 'Assignment-2', 'Assignment-3', 'Assignment-4', 'Assignment-5', 'Assignment-6'],
        datasets: [
            {
                label: 'Assignment Mark',
                data: [60, 45, 59, 53, 30, 40],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className='pie-chart'>
                <Pie data={data} />;
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Statistics;