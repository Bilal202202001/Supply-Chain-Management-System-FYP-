'use client'
import React, { useState } from 'react'
import * as Unicons from '@iconscout/react-unicons';

export default function AddSupplier({didSubmit}) {

    const handleForm = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log("Form data : ", data);
        const JsonData = JSON.stringify(data)
        console.log("Form Json Data : ", JsonData)
        const endpoint = '/api/Suppliers/'
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

        if(didSubmit){
            didSubmit(result)
        }
        // console.log("Post Return : ",result);



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
                <span>ADD SUPPLIER</span>
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
                        {/* <h3 className="mb-4 md:text-2xl text-xl font-medium">ADD OUR TEAM</h3> */}
                            <div className="p-6 rounded-md shadow-lg shadow-slate-700 bg-white dark:bg-slate-900 w-3/5">
                                <form onSubmit={handleForm}>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Name :" />
                                        </div>

                                    </div> 
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="type" id="type" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Type :" />
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="Email" id="Email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Email :" />
                                        </div>

                                    </div> 
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="phoneNo" id="phoneNo" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Phone No :" />
                                        </div>

                                    </div>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="ibn" id="ibn" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Account No :" />
                                        </div>

                                    </div> 
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">

                                            <input name="productCat" id="productCat" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0"
                                                placeholder="Product Category :" />
                                        </div>

                                    </div> 
                                        

                                    <button type="submit" id="submit" name="send"
                                        className="py-2 px-5 inline-block font-normal tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-slate-950 hover:bg-slate-900 text-white rounded-md">Add
                                        Supplier</button>
                                </form>
                            </div>
                        </div>
            )}

        </>
    )
}
