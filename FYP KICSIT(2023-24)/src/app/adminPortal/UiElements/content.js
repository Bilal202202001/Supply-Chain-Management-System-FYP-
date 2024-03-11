'use client'
import dynamic from 'next/dynamic';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';
import UiNav from './UiNavBar';

export default function UiContent() {
    return <>
        <div className='h-auto w-full  flex flex-col items-center justify-center'>

            <UiNav/>

            {/* Main Heading */}
            <h2 className='font-semibold text-2xl text-black dark:text-white w-full h-20 flex justify-start items-center p-4'>
                UI Elements
            </h2>
            {/* Logo Heading */}
            {/* <h2 className='bg-gray-100 w-11/12 h-12 flex justify-center items-center p-4 my-4 shadow shadow-gray-700 rounded-xl text-lg font-lexend text-gray-400 ml-3 hover:text-violet-600 l-light dark:bg-transparent'>
                <img src='/images/logoC.png' className='h-10 w-10 m-4' alt="logo" />
                NexusNest
            </h2> */}

            {/* Impression Box */}
            <div className=' w-11/12 h-24 bg-slate-950 dark:bg-transparent shadow-sm shadow-slate-950 flex justify-center items-center my-2 rounded-lg'>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1 flex justify-start items-start '>
                        Visits <Unicons.UilEye height={20} width={20} className="text-blue-600 ml-2" />
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1 '>
                        4300
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1 '>
                        3.1    This Month
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1 flex justify-start items-start '>
                        Clicks <Unicons.UilMouse height={20} width={20} className="text-blue-600 ml-2" />
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        4301
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        3.21    This Month
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1 flex justify-start items-start '>
                        SEO Ranking <Unicons.UilChartGrowth height={20} width={20} className="text-blue-600 ml-2" />
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        100
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        4.65    This Week
                    </h3>
                </div>
                <div className='text-white w-3/12 flex flex-col justify-center items-center'>
                    <h1 className='font-normal text-sm text-center dark:text-white my-1 flex justify-start items-start '>
                        Sponsers <Unicons.UilUserMd height={20} width={20} className="text-blue-600 ml-2" />
                    </h1>
                    <h2 className='font-semibold text-sm text-center dark:text-white my-1'>
                        8
                    </h2>
                    <h3 className='font-normal text-xs text-center dark:text-white my-1'>
                        3.8    This Month
                    </h3>
                </div>
            </div>

            <img src='/images/score.png' alt='score' className='p-2 shadow-lg shadow-slate-950 m-2' />

        </div>
    </>
}