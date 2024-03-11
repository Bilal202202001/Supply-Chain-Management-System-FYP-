'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import useSWR from "swr"



const Navbar = dynamic(() => import('../components/navbar'));
const Switcher = dynamic(() => import('../components/Switcher'));
const Footer = dynamic(() => import('../components/footer'));
const ProductsList = dynamic(()=> import('../components/products'))
// import ProductsList from '../components/products';
import * as Unicons from '@iconscout/react-unicons';


const fetcher = (url) => fetch(url).then((res) => res.json());



export default function Pricing() {

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


    return (
        <>
            {/* <body className="font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900"> */}

            <Navbar />
            <div>
                <section className="py-28 w-full table relative bg-[url('/images/bg/bg-x.jpg')] bg-left-top bg-cover bg-no-repeat" id="home">
                    <div className="absolute inset-0 bg-slate-950/80"></div>

                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Comfortable Pricing</h3>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-3xl mt-10 text-black font-lexend dark:text-white">PRODUCTS</h3>
                    </div>
                    <div className="w-full flex justify-center item-center">
                        <label htmlFor="category" className="py-2 px-5 ml-2 font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md items-center inline-flex gap-1">Category</label>
                        <select id="category" value={selectedCategoryId} onChange={handleCategoryChange} className='px-6 text-center ml-3 cursor-pointer text-gray-700 bg-white border  rounded-lg shadow-sm focus:outline-none dark:bg-transparent dark:text-white dark:border-violet-600 dark:border-gradient-to-t cursor-pointer'>
                            <option value={'ALL'} selected className='text-start dark:text-black cursor-pointer' >All</option>
                            {data && data.map((cat, idx) => (
                                <option key={idx} value={cat.id} className='px-6 text-start dark:text-black cursor-pointer'>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                <ProductsList catID={selectedCategoryId} />



                {/* <div className="grid md:grid-cols-4 grid-cols-3 mt-8 gap-[10px] items-center">
                    {ProductsData.map((product, index) => (
                        <ProductPalets
                            key={index}
                            price={product.price}
                            imgLoc={product.imgLoc}
                            productName={product.productName}
                            items={product.items}
                        />
                    ))}
                </div> */}



                <div className="container lg:pb-24 pb-16">
                </div>
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                    <div className="mt-6 mb-6">
                        <Link href="/contactus" className="py-2 px-5 font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md items-center inline-flex gap-1"><Unicons.UilPhone width={16} /> Contact us</Link>
                    </div>
                </div>
            </div>
            <Footer />
            <Switcher />

           
        </>
    )
}

