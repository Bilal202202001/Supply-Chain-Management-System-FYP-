'use client'
import React from 'react'
import Link from 'next/link';
import useSWR from "swr"
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'react-feather';




const fetcher = (url) => fetch(url).then((res) => res.json());


export default function MeetOurs() {

    const endpoint = `/api/ourTeam`;
    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data in Services : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"
    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">Meet Our Teammates</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt amet facere mollitia a beatae, deleniti commodi dolorum sapiente voluptatum at aperiam iste dolore nemo?</p>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {data && data.map((item, index) => (
                        <div className="lg:col-span-3 md:col-span-6" key={index} >
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
            
                                    <Image src={item.image} className="" alt="" height={0} width={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>
                                    <ul
                                        className="list-none absolute top-1/2 -translate-y-1/2 -end-20 group-hover:end-5 transition-all duration-500 ease-in-out">
                                        <li className=""> <Link href={item.fb}
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Facebook className="h-4 w-4"></Facebook></Link></li>
                                        <li className="mt-1"> <Link href={item.insta}
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Instagram className="h-4 w-4"></Instagram></Link></li>
                                        <li className="mt-1"> <Link href={item.linkedin}
                                            className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Linkedin className="h-4 w-4"></Linkedin></Link></li>
                                    </ul>
                                </div>

                                <div className="content mt-3">
                                     <Link href=""
                                        className="text-lg hover:text-violet-600 transition-all duration-500 ease-in-out h5 font-lexend">{item.title}</Link>
                                    <p className="text-slate-400">{item.type}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}






