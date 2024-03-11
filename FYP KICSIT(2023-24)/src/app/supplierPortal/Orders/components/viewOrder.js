'use client'
import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewOrder() {
    const endpoint = `/api/orders`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading,mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    const handleDelete = async (orderID) => {
        const response = await fetch(`/api/orders/${orderID}`, {
            method: 'DELETE'
        });
        mutate()
    }

    return <>
        <div className="w-full flex flex-col items-center">
        {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">MESSEGES</h3> */}
                <table class="font-lexend border-separate shadow shadow-slate-600 p-5 rounded-xl w-12/12 m-5 text-center">
                    <thead className=' mt-20'>
                        <tr >
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Quantity</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Product ID</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Product name</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Time Stamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((order, idx) => {

                            return <>
                                <tr>
                                    <td className='p-2'>{order.name}</td>
                                    <td className='p-2'>{order.quantity}</td>
                                    <td className='p-2'>{order.productname}</td>
                                    <td className='p-2'>{order.productid}</td>
                                    <td className='p-2'>{order.createdAt}</td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
        </div>
    </>
}



