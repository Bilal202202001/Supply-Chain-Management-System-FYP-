'use client'
import React, {useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"
import AddTeam from './addTeam';
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewOurteam() {
    const endpoint = `/api/ourTeam`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading,mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"


    const handleDelete = async (teamID) => {
        console.log("Team Id : ",teamID);
        const response = await fetch(`/api/ourTeam/${teamID}`, {
            method: 'DELETE'
        });
        mutate()
    }


    const didSubmit=(newItem)=>{
        mutate()
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleParagraph = () => {
      setIsOpen(!isOpen);
    };
    return <>
    <AddTeam didSubmit={didSubmit}/>
    <button
            className="flex items-center justify-between w-3/4 p-2 bg-slate-950 text-white rounded-md focus:outline-none font-lexend my-5"
            onClick={toggleParagraph}
        >
            <span>TEAM</span>
            <span className="transform transition-transform duration-300">
                {isOpen ? (
                    <Unicons.UilAngleUp height={20} width={20} className="text-blue-600 ml-2" />
                ) : (
                    <Unicons.UilAngleDown height={20} width={20} className="text-blue-600 ml-2" />
                )}
            </span>
        </button>
        {isOpen && (
            <div className="w-full mb-5 flex flex-col items-center">
            {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">OUR TEAM</h3> */}
            <table class="table-fixed font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-4/5 m-5 text-center">
                <thead className='bg-gradient-to-t bg-slate-950 mt-20'>
                    <tr >
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Designation</th>
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Image</th>
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Facebook</th>
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Instagram</th>
                    <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>LinkedIn</th>
                   
                    <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Edit</th>
                    <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Delete</th>
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((ourTeam, idx) => {

                        return <>
                            <tr>
                                <td className='p-2'>{ourTeam.title}</td>
                                <td className='p-2'>{ourTeam.type}</td>
                                <td className='p-2 '>
                                <div className='flex justify-center items-center w-full'>
                                <img src={ourTeam.image} alt='pic' className='h-12 w-12 rounded-full'/>
                                </div>
                                </td>
                                <td className='p-2 '>
                                <Link href={ourTeam.fb} className='flex justify-center items-center text-blue-600'>
                                <Unicons.UilFacebook width={25} height={25} className='hover:w-36'/>
                                </Link>
                                </td>
                                <td className='p-2 '>
                                <Link href={ourTeam.insta} className='flex justify-center items-center text-orange-700'>
                                <Unicons.UilInstagram width={25} height={25} className='hover:w-36'/>
                                </Link>
                                </td>
                                <td className='p-2 '>
                                <Link href={ourTeam.linkedin} className='flex justify-center items-center text-blue-600'>
                                <Unicons.UilLinkedin width={25} height={25} className='hover:w-36'/>
                                </Link>
                                </td>
                                <td className='p-2 text text-slate-950 hover:text-green-700 hover:text-green-700 cursor-pointer'>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilPen width={25} height={25} />
                                    </div>
                                </td>

                                <td className='p-2 text text-gradient-to-t text-slate-950 hover:text-red-700 cursor-pointer' onClick={() => handleDelete(ourTeam.id)}>
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
        )}
        
        
    </>
}



