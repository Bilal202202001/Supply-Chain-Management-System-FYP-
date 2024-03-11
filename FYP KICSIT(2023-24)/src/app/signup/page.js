'use client'
import React from 'react'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ArrowLeft } from 'react-feather';
import { Button } from 'react-scroll';
const Switcher = dynamic(() => import('../components/Switcher'))


export default function RegisterForm({ didSubmit }) {

    const [result, updateResults] = useState(null);

    const handleForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JsonData = JSON.stringify(data);
        console.log(JsonData);
        const endpoint = "/api/auth/register";
        const options = {
            method: "Post",
            handle: {
                "Content-Type": "application/json",
            },
            body: JsonData,
        };
        console.log(options);
        const response = await fetch(endpoint, options);
        const result = await response.json();
        if (response.status === 201) {
            window.location.href = "/adminPortal/Dashboard";
        }
        updateResults(result);
        if (didSubmit) {
            didSubmit(result);
        }
    };

    return (
        <>
            <body className="w-full font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900">

                <section className="position-relative bg-[url('/images/bg/bg-4.jpg')] bg-center bg-no-repeat">
                    <div className="absolute inset-0 bg-slate-950/50"></div>
                    <div className="w-full container-fluid relative">
                        <div className="grid grid-cols-1">
                            <div className="lg:col-span-4">
                                <div className="flex flex-col min-h-screen md:px-8 py-8 px-3">

                                    <div className="text-center mx-auto">
                                        <Link href="/" className='flex text-gray-200 font-bold justify-center items-center'><Image src="/images/logoC.png" className='mr-1' alt="" width={50} height={28} />NexusNest</Link>
                                    </div>

                                    <div className="text-center ">
                                        <div className="w-3/5  m-auto px-16 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-gray-800">
                                            <div className="grid grid-cols-1">
                                                <h5 className="mb-8 text-xl dark:text-white font-medium font-lexend">Signup</h5>
                                                <form onSubmit={handleForm} className="text-start">
                                                    <div className="grid grid-cols-1">
                                                        <div className='flex justify-center items-center'>
                                                        <div className="mb-4">
                                                            <label className="form-label font-medium" htmlFor="RegisterName">User Name:</label>
                                                            <input id="RegisterName" name='userName' type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="MuhammadBilal" />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label className="form-label font-medium" htmlFor="LoginEmail">Email Address:</label>
                                                            <input id="LoginEmail" name='email' type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="name@example.com" />
                                                        </div>
                                                        </div>
                                                        <div className="mb-4 flex flex-col">
                                                            <label
                                                                htmlFor="userType"
                                                                className="form-label font-medium"
                                                            >
                                                                Type
                                                            </label>
                                                            <select
                                                                id="userType"
                                                                name="userType"
                                                                className="form-input w-2/5 py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2"

                                                            >
                                                                <option value="" hidden>Select Type</option>
                                                                <option value="admin">Admin</option>
                                                                <option value="supplier">Supplier</option>
                                                                <option value="seller">Seller</option>
                                                            </select>
                                                        </div>
                                                        <div className='flex justify-center items-center'>
                                                            <div className="mb-4">
                                                                <label className="form-label font-medium" htmlFor="LoginPassword">Password:</label>
                                                                <input id="LoginPassword" name='password' type="password" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Password:" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label className="form-label font-medium" htmlFor="LoginPassword">Confirm Password:</label>
                                                                <input id="LoginPassword" name='cnfrmPassword' type="password" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Password:" />
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <button href="" type='submit' className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md w-full">Register</button>
                                                        </div>

                                                        <div className="text-center">
                                                            <span className="text-slate-400 me-2">Already have an account ? </span> <Link href="/login" className="text-slate-950 dark:text-white font-bold"> Sign in</Link>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white/80">© {new Date().getFullYear()} NexusNest.com, Inc. All Right Reserved <i className="mdi mdi-heart text-red-700"></i> by <Link href="https://www.linkedin.com/in/muhammad-bilal-343571251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-reset">Muhammad Bilal</Link>.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="fixed bottom-3 end-3">
                    <Link href="" className="back-button h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><ArrowLeft className="h-4 w-4"></ArrowLeft></Link>
                </div>


                <Switcher />
            </body>
        </>
    );
}

