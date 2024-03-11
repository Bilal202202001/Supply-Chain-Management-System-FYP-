'use client'
import dynamic from 'next/dynamic';

import Switcher from '@/app/components/Switcher';
import SideBar from '../components/sidebar';
import AdminNavbar from '../components/navbar';
import UiContent from './content';




export default function AdminUiElements() {
    return <>
        <div className='font-lexend h-auto flex '>
        <div className='w-1/5 h-screen'>
           <SideBar/>
        </div>
        <div className='w-4/5 flex flex-col items-center'>
             <AdminNavbar/>
             <UiContent/>
             
        </div>
        </div>
        <Switcher/>
    </>
}