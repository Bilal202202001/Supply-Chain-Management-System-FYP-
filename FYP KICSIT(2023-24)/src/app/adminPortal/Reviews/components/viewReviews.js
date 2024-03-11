'use client'
import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewReviews() {
    const limit = 100
    const endpoint = `/api/reviews?Limit=${limit}`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading,mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"


    const handleDelete = async (reviewID) => {
        // console.log("Review Id : ",reviewID);
        const response = await fetch(`/api/reviews/${reviewID}`, {
            method: 'DELETE'
        });
        mutate()
    }


    return <>
        <div className="w-full flex flex-col items-center">
            {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">REVIEWS</h3> */}
            <table class="font-lexend border-separate shadow shadow-slate-600 p-5 rounded-xl w-4/5 m-5 text-center">
                <thead className='bg-slate-950 mt-20'>
                    <tr >
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Designation</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Image</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Description</th>                  
                    <th className='bg-slate-950 px-3 text-white font-extralight mb-3 p-1 rounded-lg '>Delete</th>
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((reviews, idx) => {

                        return <>
                            <tr>
                                <td className='p-2'>{reviews.name}</td>
                                <td className='p-2'>{reviews.designation}</td>
                                <td className='p-2'>
                                    <img src={reviews.img} alt='pic' className='h-12 w-12 rounded-full'/>
                                </td>
                                <td className='p-2'>{reviews.description}</td>
                                {/* <td className='p-2 text text-gradient-to-t text-violet-600 hover:text-green-700 hover:text-green-700 cursor-pointer'>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilPen width={25} height={25} />
                                    </div>
                                </td> */}

                                <td className='p-2 text text-slate-950 hover:text-red-700 cursor-pointer' onClick={() => handleDelete(reviews.id)}>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilTrashAlt width={25} height={25} />
                                    </div>
                                </td>

                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </div>
    </>
}



