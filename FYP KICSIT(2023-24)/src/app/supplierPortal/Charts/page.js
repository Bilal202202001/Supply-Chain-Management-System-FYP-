'use client'
import dynamic from 'next/dynamic';

const Switcher = dynamic(()=>import('@/app/components/Switcher'));
const SideBar = dynamic(()=>import('../components/sidebar'));
const AdminNavbar = dynamic(()=>import('../components/navbar'));
const PieChart = dynamic(()=>import('./components/PieChart'));
const LineChart = dynamic(()=>import('./components/LineChart'));
const DotGraph = dynamic(()=>import('./components/DotGraph'));
const FrequencyGraph = dynamic(()=>import('./components/FrequencyGraph'));
const HorizontalBarChart = dynamic(()=>import('./components/HorizentalBar'));
const AreaChart = dynamic(()=>import('./components/AreaChart'));
const BarChart = dynamic(()=>import('./components/BarChart'));
const SalesLineChart = dynamic(()=>import('./components/ScaleLineGraph'));

import * as Unicons from '@iconscout/react-unicons';


export default function Charts() {

    const data = [
        { x: 1, xLabel: 'Laptops', y: 10 },
        { x: 2, xLabel: 'Monitor', y: 20 },
        { x: 3, xLabel: 'Keyboard', y: 15 },
        { x: 2, xLabel: 'Mouse', y: 50 },
        { x: 3, xLabel: 'Mic', y: 45 },
    ];

    const data2 = [
        { x: 'Laptop', y: 40 },
        { x: 'Mouse', y: 25 },
        { x: 'Monitor', y: 15 },
        { x: 'Keyboard', y: 10 },
        { x: 'Mic', y: 10 },
    ];
    const lineChart = [
        { x: 1, xLabel: 'Jan', y: 10 },
        { x: 2, xLabel: 'Feb', y: 20 },
        { x: 3, xLabel: 'Mar', y: 15 },
        { x: 4, xLabel: 'Apr', y: 30 },
        { x: 5, xLabel: 'May', y: 25 },
    ];
    const frequency = [
        { x: 1, xLabel: '0-10', frequency: 5 },
        { x: 2, xLabel: '11-20', frequency: 10 },
        { x: 3, xLabel: '21-30', frequency: 8 },
        { x: 4, xLabel: '31-40', frequency: 15 },
        { x: 5, xLabel: '41-50', frequency: 12 },
    ];
    const horizental = [
        { y: 1, yLabel: 'A', frequency: 5 },
        { y: 2, yLabel: 'B', frequency: 10 },
        { y: 3, yLabel: 'C', frequency: 8 },
        { y: 4, yLabel: 'D', frequency: 15 },
        { y: 5, yLabel: 'E', frequency: 12 },
    ];
    const area = [
        { x: 1, xLabel: 'Jan', y: 10 },
        { x: 2, xLabel: 'Feb', y: 20 },
        { x: 3, xLabel: 'Mar', y: 15 },
        { x: 4, xLabel: 'Apr', y: 30 },
        { x: 5, xLabel: 'May', y: 25 },
    ];
    const salesData = [
        {
            name: 'Product A',
            color: 'blue',
            sales: [
                { month: 1, monthLabel: 'Jan', amount: 100 },
                { month: 2, monthLabel: 'Feb', amount: 150 },
                { month: 3, monthLabel: 'Mar', amount: 120 },
                // ... more data
            ]
        },
        {
            name: 'Product B',
            color: 'green',
            sales: [
                { month: 1, monthLabel: 'Jan', amount: 80 },
                { month: 2, monthLabel: 'Feb', amount: 120 },
                { month: 3, monthLabel: 'Mar', amount: 100 },
                // ... more data
            ]
        }
    ];


    return <>
        <div className='w-screen h-auto flex '>
            <div className='w-1/5 h-screen'>
                <SideBar />
            </div>
            <div className='w-4/5 flex flex-col items-center'>
                <AdminNavbar />
                <h2 className='font-semibold text-2xl text-black dark:text-white w-full h-20 flex flex-col justify-start items-start p-4'>
                    Charts
                    <span className='text-xs font-light text-slate-950 rounded-lg bg-gray-100 p-1'>Statistic and Analysis</span>
                </h2>
                <div className='w-11/12  h-auto my-2  flex justify-evenly p-2 rounded-lg bg-white items-center'>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none font-semibold '>
                    <LineChart data={lineChart} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                        Line Chart
                        </span> 
                    </div>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none'>
                    <DotGraph data={lineChart} />

                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                       Dot Graph
                        </span> 
                    </div>
                    
                </div>
                <div className='w-11/12  h-84 my-2 border  flex justify-evenly p-2 rounded-lg bg-white items-center'>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none font-semibold '>
                        <BarChart data={data} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                        Bar Chart
                        </span> 
                    </div>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none'>
                        <PieChart data={data2} />

                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                        Pie Chart
                        </span> 
                    </div>
                </div>
                <div className='w-11/12  h-auto my-2 border  flex justify-evenly p-2 rounded-lg bg-white items-center'>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none font-semibold '>
                    <FrequencyGraph data={frequency} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                        Frequency Graph
                        </span> 
                    </div>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none'>
                    <HorizontalBarChart data={horizental} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                       Horizental Bar Graph
                        </span> 
                    </div>
                </div>
                <div className='w-11/12  h-auto my-2 border  flex justify-evenly p-2 rounded-lg bg-white items-center'>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none font-semibold '>
                    <AreaChart data={area} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                        Area Chart
                        </span> 
                    </div>
                    <div className='w-4/12 h-68  rounded-lg p-2 shadow-xl shadow-gray-300 hover:p-1 cursor-pointer dark:shadow-none'>
                    <SalesLineChart data={salesData} />
                         
                        <span className='flex justify-center items-center w-full h-10 font-semibold font-lexend'>
                        <Unicons.UilTagAlt width={17} className="mx-2 text-blue-600" />
                       Sales Line Graph
                        </span> 
                    </div>
                </div>
                {/* <div>
                <LineChart data={lineChart} />
                <DotGraph data={lineChart} />
                <FrequencyGraph data={frequency} />
                <HorizontalBarChart data={horizental} />
                <AreaChart data={area} />
                <SalesLineChart data={salesData} />
                </div> */}

            </div>
        </div>
        <Switcher />
    </>
}