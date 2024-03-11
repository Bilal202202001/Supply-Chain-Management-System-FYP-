'use client'
import React from 'react'
import Link from 'next/link'
import * as Unicons from '@iconscout/react-unicons';


export default function ProductPalets({price, productName, items,imgLoc }) {
    return (
        <> 
            
            <section className="relative md:py-4 py-4" id="pricing">
                <div className="container m-2 p-0">
                    <div className="mt-8 items-center w-full">
                        <div className="shadow dark:shadow-violet-600 dark:shadow-gradient-to-t rounded-md p-6 bg-gradient-to-t bg-violet-600 dark:bg-transparent">
                            <div className='w-full flex items-center justify-center'>
                                <img src={imgLoc} alt='No Pic' className='rounded-lg h-60 w-9/12	' />
                            </div>
                            <ul className="self-start pt-8">
                                <h2 className="mb-1 text-white/80">Name : {productName}</h2>
                                {items.map((item, index) => (
                                    <li key={index} className="flex items-center mb-1 text-white/80">
                                        <Unicons.UilCheckCircle width={16} className="text-orange-600 me-2 dark:text-green-600" />
                                        <span>{item}</span>
                                    </li>))}
                            </ul>
                            <div className="border-b mt-2 mb-3 border-slate-200/10"></div>
                            <div className="pb-8">
                                <div className="mb-6 text-white/50 font-lexend">
                                    <span className="relative h6 -top-5 text-xl">$</span>
                                    <span className="text-5xl h6 font-bold text-white">{price}</span>
                                    <span className="inline-block h6 ms-1">/ month</span>
                                </div>
                                <Link href=""
                                    className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full dark:bg-gradient-to-t  dark:bg-violet-600 dark:border-gradient-to-t  dark:border-violet-600">Buy
                                    Now</Link>
                            </div>
                            <div className="border-b border-slate-200/10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
