'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import useSWR from "swr"



const Navbar = dynamic(() => import('../components/navbar'));
const Switcher = dynamic(() => import('../components/Switcher'));
const Footer = dynamic(() => import('../components/footer'));
const ProductsList = dynamic(() => import('../components/products'))
// import ProductsList from '../components/products';
import * as Unicons from '@iconscout/react-unicons';
import TrackContractDetails from '../components/CheckRecord';


const fetcher = (url) => fetch(url).then((res) => res.json());



export default function Pricing() {

    const [idValue, setIDvalue] = useState(1);

    const endpoint = `/api/shipments/${idValue}`;

    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"
    console.log("Data", data);

    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const idValue = formData.get('id');
        setIDvalue(idValue);
    }
    return (
        <>
            <Navbar />
            <div>
                <section className="py-28 w-full table relative bg-[url('/images/bg/bg-x.jpg')] bg-left-top bg-cover bg-no-repeat" id="home">
                    <div className="absolute inset-0 bg-slate-950/80"></div>

                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Order Tracking</h3>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col justify-center items-center font-lexand">
                    <form onSubmit={handleForm}>
                        <div className='w-4/5 flex justify-center items-center flex-col m-4'>

                            <div className="grid grid-cols-1">
                                <div className="mb-5 flex w-full">
                                    <label for="id" className='text-lg font-semibold w-40'>
                                        Order ID : 
                                    </label>
                                    <input name="id" id="id" type="integer" className="form-input w-full py-2 px-3 h-10 bg-transparent dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded  focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                     />
                                </div>

                            </div>

                            <button type="submit" id="submit" name="send"
                                className="py-2 px-5 inline-block font-normal tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-slate-950 hover:bg-slate-900 text-white rounded-md">Track Order</button>

                        </div>
                    </form>
                    <div className='flex justify-center items-center flex-col w-full'>
                        {data &&
                            data.map((shipment, idx) => (
                                <>
                                    <h1 className="text-2xl font-bold mb-2">Order Details</h1>
                                    <div key={idx} className=" bg-white shadow-md p-6 rounded-md mt-6 flex justify-center items-center w-full ">
                                        <div className='w-1/5 p-4 border-l rounded-l-lg bg-gray-700 text-white'>
                                            <p className="text-lg font-semibold">
                                                Name
                                            </p>
                                            <p className="text-lg font-semibold">
                                                Product ID
                                            </p>
                                            <p className="text-lg font-semibold">
                                                Product Name
                                            </p>
                                            <p className="text-lg font-semibold">
                                                Product Quantity
                                            </p>
                                            <p className="text-lg font-semibold">
                                                Status
                                            </p>
                                            <p className="text-lg font-semibold">
                                                Order On
                                            </p>
                                        </div>
                                        <div className='w-2/5 p-4 border-l rounded-r-lg shadow-md bg-gray-300'>
                                            <p className="text-lg">
                                                {shipment.name}
                                            </p>
                                            <p className="text-lg">
                                                {shipment.productid}
                                            </p>
                                            <p className="text-lg">
                                                {shipment.productname}
                                            </p>
                                            <p className="text-lg">
                                                {shipment.quantity}
                                            </p>
                                            <p className="text-lg">
                                                {shipment.status}
                                            </p>
                                            <p className="text-lg">
                                                {new Date(shipment.createdAt).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}

                    </div>
                </div>

                <TrackContractDetails/>

                <div className="container lg:pb-24 pb-16">
                </div>
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                    <div className="mt-6 mb-6">
                        <Link href="/contactus" className="py-2 px-5 font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md items-center inline-flex gap-1"><Unicons.UilPhone width={16} /> Contact us</Link>
                    </div>
                </div>
            </div >
            <Footer />
            <Switcher />


        </>
    )
}

