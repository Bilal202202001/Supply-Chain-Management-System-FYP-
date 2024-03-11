'use client'
import Link from 'next/link';

export default function UiNav() {
    return <>
        {/* Navigator */}
        <div className='w-full h-12 flex flex justify-center items-center '>
            <Link href="/adminPortal/UiElements" className='w-1/6 p-2 text-center font-lexend   hover:text-gray-400 rounded-lg '>
                UI Elements
            </Link>
            <Link href="/adminPortal/UiElements/products" className='w-1/6 p-2 text-center font-lexend   hover:text-gray-400  rounded-lg '>
                Products
            </Link>
            <Link href="/adminPortal/UiElements/Categories" className='w-1/6 p-2 text-center  font-lexend   hover:text-gray-400 rounded-lg '>
                Categories
            </Link>
            <Link href="/adminPortal/UiElements/Services" className='w-1/6 p-2 text-center font-lexend  hover:text-gray-400 rounded-lg '>
                Services
            </Link>
            <Link href="/adminPortal/UiElements/Team" className='w-1/6 p-2 text-center font-lexend  hover:text-gray-400 rounded-lg'>
                Team
            </Link>
        </div>
    </>
}