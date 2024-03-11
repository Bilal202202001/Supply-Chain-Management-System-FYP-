'use client'
import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"
import Link from "next/link";
import AddProducts from '@/app/adminPortal/UiElements/products/components/addProducts';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsList(catID) {
    console.log(catID.catID);
    const requestData = catID.catID
    const endpoint = `/api/pricing?categoryId=${requestData}`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    return <>
        <div className="grid md:grid-cols-4 grid-cols-4 mt-8 gap-[0px] items-center">
        { <>
            {data && data.map((products, idx) => {

                return <section className=" relative md:py-5 py-5" id="pricing">
                <div className=" container m-2 p-0">
                    <div className=" items-center w-full">
                        <div className="w-10/12 dark:shadow-sm dark:shadow-slate-950 rounded-md p-0 bg-gray-200 dark:bg-slate-950">
                            <div className='w-full flex items-center justify-center h-52  w-full'>
                                <img src={products.img} alt='No Pic' className='rounded-t-lg rounded-b-none h-full w-full  '/>
                            </div>

                                <h2 className="text-black font-lexend text-center m-1 text-sm font-semibold dark:text-white">{products.name}</h2>
                               
                            <div className="mt-2 flex items-center">
                                <div className="flex justify-center items-center text-black/50 font-lexend w-4/5">
                                    <span className="relative h6 -top-5 text-xl dark:text-orange-600">$</span>
                                    <span className="text-3xl h6 font-lexend font-bold text-black dark:text-white">{products.price}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            })}
            </> 
        }


       </div>
        <AddProducts/>
     </>
}



