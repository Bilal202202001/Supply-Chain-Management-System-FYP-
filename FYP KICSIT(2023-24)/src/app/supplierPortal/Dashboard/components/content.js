'use client'
import dynamic from 'next/dynamic';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';

import useSWR from "swr"
import AreaChart from '../../Charts/components/AreaChart';
import SalesLineChart from '../../Charts/components/ScaleLineGraph';


const fetcher = (url) => fetch(url).then((res) => res.json());



export default function DashboardContent() {

    const endpoint = `/api/ourTeam`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading, mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"






    const areaChartData = [
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
            ]
        }
    ];

    return <>
        <div className='h-auto w-full font-lexend flex flex-col items-center justify-center'>


            {/* Upper Heading */}

            <div className=' w-full h-20 flex justify-start items-center '>
                <h2 className='flex flex-col items-start justify-center font-semibold text-2xl text-black dark:text-white px-2 w-4/5'>
                    Dashboard
                    <span className='text-xs font-light text-slate-950 rounded-lg bg-gray-100 p-1'>Empower Your Tech Journey</span>
                </h2>
                <div className='w-3/5 flex justify-start items-start'>
                    <div className='flex justify-start items-start'>
                        <div className='font-semibold text-base flex flex-col justify-start items-start'>
                            Sales
                            <span className='font-light text-sm w-full text-center'>
                                6650
                            </span>
                        </div>
                        <Unicons.UilGraphBar height={40} width={40} className="text-violet-600 mx-5 text-gray-600" />
                    </div>
                    <div className='flex justify-start items-start'>
                        <div className='font-semibold text-base flex flex-col justify-start items-start'>
                            Purchases
                            <span className='font-light text-sm w-full text-center'>
                                $ 4504
                            </span>
                        </div>
                        <Unicons.UilChartLine height={40} width={40} className="text-orange-700 mx-5 text-gray-600" />

                    </div>
                    <div className='flex justify-start items-start'>
                        <div className='font-semibold text-base flex flex-col justify-start items-start'>
                            Revenue
                            <span className='font-light text-sm w-full text-center'>
                                $ 450,678
                            </span>
                        </div>
                        <Unicons.UilComparison height={40} width={40} className="text-blue-600 ml-5 text-gray-600" />
                    </div>
                </div>
            </div>

            {/* First Box */}
            <div className=' w-11/12 h-24 bg-slate-950 dark:bg-transparent shadow-sm shadow-slate-950 flex justify-center items-center my-2 rounded-lg'>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1 '>
                        Total Income
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1 '>
                        $ 421,943
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1 '>
                        3.78    This Year
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1'>
                        Session
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        4217
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        3.78    This Year
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1'>
                        Etherium Wallet
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        8793
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        3.78    This Year
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1'>
                        Number of Clients
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        5392
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        3.78    This Year
                    </h3>
                </div>
            </div>


            {/* Box Before graph */}
            <div className=' w-full h-20 flex justify-center items-center p-4 my-6'>
                <h2 className='flex flex-col items-start justify-center font-semibold text-2xl text-black dark:text-white w-4/5'>
                    Overview
                    <span className='text-xs font-light text-slate-950 rounded-lg bg-gray-100 p-1'>Statistic Data Analysis, Data Prediction</span>
                </h2>
                <div className='w-2/5 flex justify-start items-start'>
                    <div className='font-semibold text-base flex flex-col justify-start items-start'>
                        12 August 2023
                    </div>
                    <Unicons.UilAward height={40} width={40} className="text-blue-600 mx-5 text-gray-600" />
                    <div className='font-light text-base flex flex-col justify-start items-start'>
                        Export
                    </div>


                </div>
            </div>


            {/* Chart */}
            <div className=' w-full h-20 flex flex-col justify-start items-start p-4'>
                <h2 className='flex flex-col items-start justify-center font-normal text-1xl text-black dark:text-white w-4/5'>
                    $ 459,378
                    <span className='text-xs font-light text-slate-950 rounded-lg bg-gray-100 p-1'>Statistic 27326713.131(20%)</span>
                </h2>
                <div className='flex justify-start items-start'>
                    <div className='w-2/5'>
                        <AreaChart data={areaChartData} />
                    </div>
                    <div className='w-2/5 mt-6'>
                        <SalesLineChart data={salesData} />
                    </div>
                    <div className='w-1/5 mt-6 flex flex-col justify-start items-start rounded-lg shadow-sm shadow-gray-400 '>
                        <h2 className='font-semibold text-base  w-full bg-slate-950 text-white font-lexend px-2 rounded-t-lg mb-2'>
                            Team
                        </h2>

                        {data && data.map((ourTeam, idx) => {
                            return <>
                                <div className='flex justify-center items-center mx-2 my-1 '>
                                    <img src={ourTeam.image} alt='profile' className='h-8 w-8 rounded-full' />
                                    <h3 className='p-2 text-sm'>{ourTeam.title}</h3>
                                </div>
                            </>
                        })}

                    </div>
                </div>
            </div>
        </div>
    </>
}