'use client'
import dynamic from 'next/dynamic';

import Switcher from '@/app/components/Switcher';



export default function AdminPage() {
 

    return <>
        <div className='h-auto flex '>
        {/* <div className='w-1/5 h-screen'>
            <SideBar/>
        </div>
        <div className='w-4/5 flex flex-col items-center'>
             <AdminNavbar/>
        </div> */}
        </div>
        <Switcher/>
    </>
}