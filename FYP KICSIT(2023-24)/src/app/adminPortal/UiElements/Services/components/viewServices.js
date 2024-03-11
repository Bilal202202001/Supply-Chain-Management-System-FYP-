'use client'
import React, {useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"
import AddServices from './addServices';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewServices(catID) {
    const endpoint = `/api/services`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading,mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"
    
    const handleDelete = async (serviceID) => {
        console.log("Service Id : ",serviceID);
        const response = await fetch(`/api/services/${serviceID}`, {
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
        <AddServices didSubmit = {didSubmit}/>
        <button
            className="flex items-center justify-between w-3/4 p-2 bg-slate-950 text-white rounded-md focus:outline-none font-lexend my-5"
            onClick={toggleParagraph}
        >
            <span>SERVICES</span>
            <span className="transform transition-transform duration-300">
                {isOpen ? (
                    <Unicons.UilAngleUp height={20} width={20} className="text-blue-600 ml-2" />
                ) : (
                    <Unicons.UilAngleDown height={20} width={20} className="text-blue-600 ml-2" />
                )}
            </span>
        </button>
        {isOpen && (
            <div className="w-full mb-5  flex flex-col items-center">
            {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">SERVICES</h3> */}
            <table class="font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-4/5 m-5 text-center">
                <thead className='bg-gradient-to-t bg-violet-600 mt-20'>
                    <tr >
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Title</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Icon</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Description</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Edit</th>
                        <th className='bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((service, idx) => {

                        return <>
                            <tr>
                                <td className='p-2'>{service.title}</td>
                                <td className='p-2'>{service.icon}</td>
                                <td className='p-2'>{service.description}</td>
                                <td className='p-2 text text-slate-950 hover:text-green-700 hover:text-green-700 cursor-pointer'>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilPen width={25} height={25} />
                                    </div>
                                </td>

                                <td className='p-2 text text-slate-950 hover:text-red-700 cursor-pointer' onClick={() => handleDelete(service.id)}>
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



