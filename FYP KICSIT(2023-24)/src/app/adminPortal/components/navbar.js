'use client'
import dynamic from 'next/dynamic';
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';



export default function AdminNavbar() {

    // const user = await getSessionUser()
    // let userName
    // if (user) {
    //   const data = await getUserByUserID(user)
    //   userName = data[0].userName
    // }


    return <>
        <div className='flex justify-between shadow shadow-gray-400 h-20 w-full  text-white'>
            <div className='w-8/12 h-full flex justify-start items-center'>
            <Link href="#" className='mx-2'>
            <Unicons.UilListUiAlt  height={40} width={40} className="text-slate-950 dark:text-white hover:text-slate-900" /></Link>
            </div>
            <div className='w-1/12 h-full flex justify-center items-center'>
            <Link href="#" className='p-2 m-1 rounded-full bg-gray-100 dark:bg-transparent'>
            <Unicons.UilBell width={30} className="text-gray-400 hover:text-slate-950" /></Link>
            <Link href="#" className='p-2 m-1 rounded-full bg-gray-100 dark:bg-transparent '>
            <Unicons.UilEnvelopeCheck  width={30} className="text-gray-400 hover:text-slate-950" /></Link>

            </div>
            <div className='w-3/12 h-full flex justify-center items-center'>
                <img src='/images/01.jpg' alt='Profile' className='h-10 w-10 mx-4 rounded-full'/>
                <div>
                    <h2 className='text-black font-bold text-sm dark:text-white'>
                        Muhammad Bilal 
                    </h2>
                    <h3 className='text-sm text-black font-medium dark:text-white'>
                        CEO
                    </h3>
                </div>

            </div>
        </div>
    </>
}