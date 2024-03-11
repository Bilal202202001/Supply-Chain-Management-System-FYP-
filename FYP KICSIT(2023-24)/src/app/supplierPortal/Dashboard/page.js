'use client'
import dynamic from 'next/dynamic';
const Switcher = dynamic(()=>import('@/app/components/Switcher'));
const SideBar = dynamic(()=>import('../components/sidebar'));
const AdminNavbar = dynamic(()=>import('../components/navbar'));
const DashboardContent = dynamic(()=>import('./components/content'));




export default function AdminDashboard() {
    return <>
        <div className='h-auto flex '>
        <div className='w-1/5 h-screen'>
            <SideBar/>
        </div>
        <div className='w-4/5 flex flex-col items-center'>
             <AdminNavbar/>
             <DashboardContent/>
             
        </div>
        </div>
        <Switcher/>
    </>
}