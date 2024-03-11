'use client'
import React, {useState} from 'react'
import * as Unicons from '@iconscout/react-unicons';
import useSWR, { mutate } from "swr"
import Link from "next/link";
import AddProducts from './addProducts';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ViewProducts() {
    const catID = 'ALL'
    const endpoint = `/api/pricing?categoryId=${catID}`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading, mutate } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);

    const handleDelete = async (productId) => {
        console.log("Product Id : ", productId);
        const response = await fetch(`/api/pricing/${productId}`, {
            method: 'DELETE'
        });
        mutate()
    }



    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    const didSubmit = (newItem) => {
        mutate()
    }


    const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };



    return <>
        <AddProducts didSubmit={didSubmit} />
        <button
            className="flex items-center justify-between w-3/4 p-2 bg-slate-950 text-white rounded-md focus:outline-none font-lexend my-5"
            onClick={toggleParagraph}
        >
            <span>PRODUCTS</span>
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
                {/* <h3 className="mb-4 md:text-2xl text-xl font-medium w-4/5 text-center">PRODUCTS</h3> */}
                <table class="font-lexend border-separate shadow-lg shadow-slate-700 p-5 rounded-xl w-4/5 m-5 text-center">
                    <thead className='bg-gradient-to-t bg-violet-600 mt-20'>
                        <tr >
                            <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Name</th>
                            <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Price</th>
                            <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Category</th>
                            <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Edit</th>
                            <th className='bg-gradient-to-t bg-slate-950 text-white font-extralight mb-3 p-1 rounded-lg '>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((product, idx) => {

                            return <>
                                <tr>
                                    <td className='p-2'>{product.name}</td>
                                    <td className='p-2'>{product.price} $/piece</td>
                                    <td className='p-2'>{product.cate}</td>
                                    <td className='p-2 text text-slate-950 hover:text-green-700 cursor-pointer' >
                                        <div className='w-full flex items-center justify-center'>
                                            <Unicons.UilPen width={25} height={25} />
                                        </div>
                                    </td>

                                    <td className='p-2 text text-slate-950 hover:text-red-700 cursor-pointer' onClick={() => handleDelete(product.id)}>
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



