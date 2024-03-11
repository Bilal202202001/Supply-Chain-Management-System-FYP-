'use client'
import React, {useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR from "swr"
import AddCategory from './addCategory';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewCategory() {
    
    const endpoint = `/api/category`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading, mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    const handleDelete = async (categoryID) => {
        console.log("Product Id : ",categoryID);
        const response = await fetch(`/api/category/${categoryID}`, {
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
        <AddCategory didSubmit={didSubmit}/>
        <button
            className="flex items-center justify-between w-3/4 p-2 bg-slate-950 text-white rounded-md focus:outline-none font-lexend my-5"
            onClick={toggleParagraph}
        >
            <span>CATEGORIES</span>
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
            {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">CATEGORIES</h3> */}
            <table class="font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-4/5 m-5 text-center">
                <thead className='bg-gradient-to-t bg-slate-950 mt-20'>
                    <tr >
                        <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>               
                    <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Edit</th>
                    <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Delete</th>
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((category, idx) => {

                        return <>
                            <tr>
                                <td className='p-2'>{category.name}</td>
                                
                                <td className='p-2 text text-gradient-to-t text-slate-950 hover:text-green-700 hover:text-green-700 cursor-pointer'>
                                    <div className='w-full flex items-center justify-center'>
                                        <Unicons.UilPen width={25} height={25} />
                                    </div>
                                </td>

                                <td className='p-2 text text-gradient-to-t text-slate-950 hover:text-red-700 cursor-pointer'
                                onClick={() => handleDelete(category.id)}>
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



