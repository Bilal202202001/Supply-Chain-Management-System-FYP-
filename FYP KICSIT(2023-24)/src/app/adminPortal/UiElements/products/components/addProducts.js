'use client'
import React, { useState } from 'react'
import useSWR, { mutate } from "swr"
import * as Unicons from '@iconscout/react-unicons';

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function AddProducts({ didSubmit }) {

    const endpoint = "/api/category"
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"


    const handleForm = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log("Form data : ", data);
        const JsonData = JSON.stringify(data)
        console.log("Form Json Data : ", JsonData)
        const endpoint = '/api/pricing/'
        const options = {
            method: "Post",
            handle: {
                "Content-Type": "application/json"
            },
            body: JsonData
        }
        const response = await fetch(endpoint, options)
        const result = await response.json()
        if (response.status === 201) {
            event.target.reset();
        }

        // console.log("Post Return : ",result);

        if (didSubmit) {
            didSubmit(result)
        }

    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleParagraph = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <button
                className="flex items-center justify-between w-3/4 p-2 bg-slate-950 text-white rounded-md focus:outline-none font-lexend my-5"
                onClick={toggleParagraph}
            >
                <span>ADD PRODUCTS</span>
                <span className="transform transition-transform duration-300">
                    {isOpen ? (
                        <Unicons.UilAngleUp height={20} width={20} className="text-blue-600 ml-2" />
                    ) : (
                        <Unicons.UilAngleDown height={20} width={20} className="text-blue-600 ml-2" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="flex flex-col items-center w-full mb-5">
                    {/* <h3 className="mb-4 md:text-2xl text-xl font-medium">ADD PRODUCTS</h3> */}
                    <div className="p-6 rounded-md shadow-lg shadow-slate-700 bg-white dark:bg-slate-900 w-3/5">
                        <form onSubmit={handleForm}>
                            <div className="grid lg:grid-cols-12 lg:gap-[30px]">
                                <div className="lg:col-span-6 mb-5">

                                    <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                        placeholder="Name :" />
                                </div>

                                <div className="lg:col-span-6 mb-5">
                                    <input name="price" id="price" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                        placeholder="Price :" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mb-5">
                                    <input name="img" id="img" type='text' className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                        placeholder="Image :" />
                                </div>
                                <div className="w-full flex justify-start item-start mb-3">
                                    <label htmlFor="category" className="px-5 ml-2 font-normal align-middle  text-base text-center bg-slate-950  text-white rounded-md items-center inline-flex gap-1 cursor-pointer">Category</label>
                                    <select id="category" name="cate" className='px-6 text-center ml-3 cursor-pointer text-gray-700 bg-white rounded-lg shadow-sm focus:outline-none dark:bg-transparent dark:text-white cursor-pointer'>
                                        <option class="text-start dark:text-black cursor-pointer" value={'ALL'} selected className='text-start cursor-pointer' >All</option>
                                        {data && data.map((cat, idx) => (
                                            <option class="text-start dark:text-black cursor-pointer" key={idx} value={cat.id}  >
                                                {cat.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-5">
                                    <textarea name="description" id="description"
                                        className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 h-28"
                                        placeholder="Description :"></textarea>
                                </div>
                            </div>

                            <button type="submit" id="submit" name="send"
                                className="py-2 px-5 inline-block font-normal tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-slate-950 hover:bg-slate-900 text-white rounded-md">Add
                                Product</button>
                        </form>
                    </div>
                </div>
            )}

        </>
    )
}
