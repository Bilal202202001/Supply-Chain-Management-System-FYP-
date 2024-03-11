'use client'
import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewMesseges(catID) {
    const endpoint = `/api/messeges`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading,mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    const handleDelete = async (messageID) => {
        console.log("Message Id : ",messageID);
        const response = await fetch(`/api/messeges/${messageID}`, {
            method: 'DELETE'
        });
        mutate()
    }

    return <>
        <div className="w-full flex flex-col items-center">
        {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">MESSEGES</h3> */}
                <table class="font-lexend border-separate shadow shadow-slate-600 p-5 rounded-xl w-4/5 m-5 text-center">
                    <thead className='bg-gradient-to-t bg-violet-600 mt-20'>
                        <tr >
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Email</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Subject</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Comments</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 px-3 rounded-lg '>Reply</th>
                            <th className='bg-slate-950 text-white font-extralight mb-3 p-1 px-3 rounded-lg '>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((message, idx) => {

                            return <>
                                <tr>
                                    <td className='p-2'>{message.name}</td>
                                    <td className='p-2'>{message.email}</td>
                                    <td className='p-2'>{message.subjects}</td>
                                    <td className='p-2'>{message.comments}</td>
                                    <td className='p-2 text-slate-950 hover:text-green-700 hover:text-green-700 cursor-pointer'>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilMessage  width={25} height={25} />
                                    </div>
                                </td>

                                <td className='p-2 text-slate-950 hover:text-red-700 cursor-pointer' onClick={() => handleDelete(message.id)}>
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



