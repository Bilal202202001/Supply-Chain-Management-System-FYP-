'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';


const Switcher = dynamic(()=>import('@/app/components/Switcher'));
const SideBar = dynamic(()=>import('../components/sidebar'));
const AdminNavbar = dynamic(()=>import('../components/navbar'));
const ProductsList = dynamic(()=>import('./components/productsPage'));
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json());



export default function ProductsMainAdmin() {
    
    const endpoint = "/api/category"
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"


    const [selectedCategoryId, setSelectedCategoryId] = useState('ALL')

    const handleCategoryChange = (event) => {
        setSelectedCategoryId(event.target.value);
    };

    return <>
        <div className='h-auto flex font-lexend'>
            <div className='w-1/5 h-screen'>
                <SideBar />
            </div>
            <div className='w-4/5 flex flex-col items-center'>
                <AdminNavbar />

                <h2 className='font-semibold text-2xl text-black dark:text-white w-full h-20 flex justify-start items-center p-4'>
                    Products
                </h2>
                <div className="container">
                    <div className="w-full flex justify-center item-center">
                        <label htmlFor="category" className="py-2 px-5 ml-2 font-normal tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-slate-950 hover:bg-slate-900 text-white rounded-md items-center inline-flex gap-1">Category</label>
                        <select id="category" value={selectedCategoryId} onChange={handleCategoryChange} className='px-6 text-center ml-3 cursor-pointer text-gray-700 bg-white  rounded-lg shadow-sm focus:outline-none dark:bg-transparent dark:text-white cursor-pointer'>
                            <option value={'ALL'} selected className='text-start dark:text-black cursor-pointer' >All</option>
                            {data && data.map((cat, idx) => (
                                <option key={idx} value={cat.id} className='px-6 text-start dark:text-black cursor-pointer'>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                <ProductsList catID={selectedCategoryId}/>


            </div>
        </div>
        <Switcher />
    </>
}