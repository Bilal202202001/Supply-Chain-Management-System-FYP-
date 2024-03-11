'use client'
import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';


export default function SideBar() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };


    return <>
        <div className='bg-slate-950 h-auto w-full text-white flex flex-col items-center'>
            <span className="h-20  bg-slate-900 flex items-center justify-center w-full">
                <img src='/images/logoC.png' className='h-10 w-10' alt="logo" />
                <h2 className=' text-lg font-lexend text-base text-gray-400 ml-3 dark:text-white hover:text-white l-light'><Link href='/'>NexusNest</Link></h2>
            </span>
            <div className='py-2 w-full '>
                <ul>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilApps width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Dashboard" className='text-sm font-lexend'> Dashboard </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilWallet width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Crypto Wallet </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilShoppingCartAlt width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/products" className='text-sm font-lexend'> Products </Link>
                    </li>
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilUserCircle width={20} className="mx-5 text-gray-600" />
                        <Link href="/signup" className='text-sm font-lexend'> Regsiter Users </Link>
                    </li> */}
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilHistory width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/prices" className='text-sm font-lexend'> Prices </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilUserCircle width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Suppliers" className='text-sm font-lexend'> Supplier </Link>
                    </li>
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilUserSquare width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Employees" className='text-sm font-lexend'> Employees </Link>
                    </li> */}
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilTransaction width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Orders" className='text-sm font-lexend'> Orders </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilHistory width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Sales" className='text-sm font-lexend'> Sales </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilArrowGrowth width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Charts" className='text-sm font-lexend'> Charts </Link>
                    </li>
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilArrowGrowth width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Shipments" className='text-sm font-lexend'> Shipments </Link>
                    </li> */}
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilEnvelopeQuestion width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Messeges" className='text-sm font-lexend'> Messeges </Link>
                    </li> */}
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilBookReader width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/Reviews" className='text-sm font-lexend'> Reviews </Link>
                    </li> */}
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilMoneyStack width={20} className="mx-5 text-gray-600" />
                        <Link href="/sellersPortal/UiElements" className='text-sm font-lexend'> UI Elements </Link>
                    </li> */}
                    {/* <div className='flex flex-col'>
                        <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer' >
                            <Unicons.UilMoneyStack width={20} className="mx-5 text-gray-600" />
                            <span className='text-sm font-lexend cursor-pointer'>
                            <Link href="/sellersPortal/UiElements" className='text-sm font-lexend'> UI Elements 
                            </Link>
                            </span>
                            <Unicons.UilAngleDown onClick={toggleExpansion} className={`ml-auto transform ${expanded ? 'rotate-180' : 'rotate-0'}`} />
                        </li>
                        {expanded && (
                            <ul className='my-3 space-y-1 flex flex-col items-center w-full'>
                                <li><Link href="/sellersPortal/UiElements/products" className='flex justify-center items-center font-lexend text-sm p-1 hover:bg-slate-800 rounded-lg w-20 bg-slate-900'>Product</Link></li>
                                <li><Link href="/sellersPortal/UiElements/Categories" className='flex justify-center items-center font-lexend text-sm p-1 hover:bg-slate-800 rounded-lg w-20 bg-slate-900'>Category</Link></li>
                                <li><Link href="/sellersPortal/UiElements/Services" className='flex justify-center items-center font-lexend text-sm p-1 hover:bg-slate-800 rounded-lg w-20 bg-slate-900'>Services</Link></li>
                                <li><Link href="/sellersPortal/UiElements/Team" className='flex justify-center items-center font-lexend text-sm p-1 hover:bg-slate-800 rounded-lg w-20 bg-slate-900'>Team</Link></li>
                            </ul>
                        )}
                    </div> */}
                    {/* <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilSlidersVAlt width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Generals </Link>
                    </li>
                     */}
                </ul>
            </div>
            <div className=' w-4/5 border-b border-gray-400 h-2'>

            </div>
            <div className='py-2 w-full'>
                <ul>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilFacebook width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Facebook </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilInstagram width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Instagram </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilLinkedin width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Linkedin </Link>
                    </li>
                    <li className='flex items-center h-10 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilTwitter width={20} className="mx-5 text-gray-600" />
                        <Link href="#" className='text-sm font-lexend'> Twitter </Link>
                    </li>
                    <li className='flex items-center shadow shadow-white h-10 mt-4 hover:bg-slate-900 cursor-pointer'>
                        <Unicons.UilSignout width={20} className="mx-5 text-gray-600" />
                        <Link href="/logout" className='text-sm font-lexend'> Logout </Link>
                    </li>
                </ul>
                <h1 className=' my-4 text-sm font-thin font-lexend text-base text-gray-400 dark:text-white hover:text-white l-light cursor-pointer w-full text-center'>© All Right Reserved</h1>
            </div>
            {/* <span className="h-12 flex flex-col items-center justify-center">
                
            </span> */}
        </div>
    </>
}