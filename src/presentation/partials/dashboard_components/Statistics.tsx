import React from 'react';
import { Line } from 'react-chartjs-2';
import { GoDotFill } from 'react-icons/go';

import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    ChartData,
    ChartOptions
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const Statistics: React.FC = () => {
    const data: ChartData<'line', number[], string> = {
        labels: ["", "Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug", "", "Sep", "", "Oct", "", "Nov", "", "Dec"],
        datasets: [
            {
                data: [900, 950, 900, 960, 930, 800, 920, 750, 930, 800, 935, 925, 825, 900, 950, 900, 960, 930, 800, 920, 750, 930, 800, 935, 925, 825, 900,
                    950, 900, 960, 930, 800, 920, 750, 930, 800, 935, 925, 825],
                backgroundColor: 'rgba(91, 200, 182, 0.2)',
                pointStyle: false,
                borderColor: '#15b097',
                pointBorderColor: 'transparent',
                tension: 0.5,
                fill: true,
                borderWidth: 2,
            },
            {
                data: [800, 850, 800, 860, 830, 700, 820, 850, 730, 700, 735, 825, 1025, 700, 850, 800, 860, 1030, 900, 1020, 850, 1030, 900, 1035, 875, 925, 1000,
                    1050, 1000, 1060, 1030, 900, 1020, 650, 730, 700, 735, 825, 725],
                backgroundColor: 'rgba(228, 106, 17, 0.1)',
                pointStyle: false,
                borderColor: '#E46A11',
                pointBorderColor: 'transparent',
                tension: 0.5,
                fill: true,
                borderWidth: 2,
            },
        ]
    };

    const options: ChartOptions<'line'> = {
        plugins: {
            legend: { display: false },
            filler: {
                propagate: false,
            }
        },
        scales: {
            x: {
                grid: { display: false },
            },
            y: {
                min: 0,
                max: 1400,
                ticks: {
                    stepSize: 200,
                    callback: (tickValue: string | number) => {
                      if (typeof tickValue === 'number') {
                          return tickValue >= 1000 ? `${tickValue / 1000}K` : tickValue;
                      }
                      return tickValue;
                      }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)' // Decrease opacity of y-axis grid lines
                }
            }
        }
    };

    return (
        <div className='relative w-[350px] sm:w-[500px] md:w-[600px] lg:w-[900px] xl:w-full bg-white rounded-lg px-6 pt-6 pb-4 mt-6 shadow-md'>
            <div className='flex pb-6'>
                <div className='flex flex-col'>
                    <div className='text-zinc-700 text-lg font-medium font-inter leading-7 tracking-tight'>Statistics</div>
                    <div className='text-gray-500 text-sm font-medium font-inter leading-tight tracking-tight'>Revenue and Sales</div>
                </div>
                <div className='flex flex-1 gap-2 justify-center'>
                    <div className='inline-flex items-center'>
                        <GoDotFill className='h-4 w-4 text-[#15b097]'/>
                        <div className='text-gray-500 text-xs font-medium font-inter leading-[18px] tracking-tight'>Revenue</div>
                    </div>
                    <div className='inline-flex items-center'>
                        <GoDotFill className='h-4 w-4 text-[#E46A11]'/>
                        <div className='text-gray-500 text-xs font-medium font-inter leading-[18px] tracking-tight'>Sales</div>
                    </div>
                </div>
            </div>
            <Line data={data} options={options} width={400} height={100} />
        </div>
    );
};

export default Statistics;
