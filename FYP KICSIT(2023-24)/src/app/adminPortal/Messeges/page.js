'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Switcher = dynamic(()=>import('@/app/components/Switcher'));
const SideBar = dynamic(()=>import('../components/sidebar'));
const AdminNavbar = dynamic(()=>import('../components/navbar'));
const ViewMesseges = dynamic(()=>import('./components/viewMesseges'));

export default function ProductsMainAdmin() {
    
    return <>
        <div className='h-auto flex font-lexend'>
            <div className='w-1/5 h-screen'>
                <SideBar/>
            </div>
            <div className='w-4/5 flex flex-col items-center'>
                <AdminNavbar/>

                <h2 className='font-semibold text-2xl text-black dark:text-white w-full h-20 flex flex-col justify-start items-start p-4'>
                    Messeges
                    <span className='text-xs font-light text-slate-950 rounded-lg bg-gray-100 p-1'>
                    Smarter, Faster, Together
                    </span>
                </h2>
                <ViewMesseges/>
                
            </div>
        </div>
        <Switcher />
    </>
}