'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import Switcher from '@/app/components/Switcher';
import SideBar from '../../components/sidebar';
import AdminNavbar from '../../components/navbar';
import ViewOurteam from './components/viewOurTeam';
import UiNav from '../UiNavBar';


export default function ProductsAdmin() {
        return <>
        <div className='w-screen h-auto flex font-lexend'>
            <div className='w-1/5 h-screen'>
              <SideBar/>
            </div>
            <div className='w-4/5 flex flex-col items-center'>
                <AdminNavbar/>
                <UiNav/>
                <h2 className='font-semibold text-2xl text-black dark:text-white w-full h-20 flex justify-start items-center p-4'>
                    Team
                </h2>
                <ViewOurteam/>

            </div>
        </div>
        <Switcher />
    </>
}