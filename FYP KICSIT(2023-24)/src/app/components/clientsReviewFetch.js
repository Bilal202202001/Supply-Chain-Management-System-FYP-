'use client'
import React from 'react'
import useSWR from "swr"
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ClientsReviewFetch(Limit) {
   
    const getLimit = Limit.Limit
    // console.log("Limit",getLimit);
    const endpoint = `/api/reviews?Limit=${getLimit}`;

    console.log("Fetcher : ", fetcher(endpoint));
    const { data, error, isloading } = useSWR(endpoint, fetcher)
    console.log("Data : ", data);
    if (error) return "An Error Occured"
    if (isloading) return "Loading.....!"

    return <>
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium font-lexend">Client&apos;s Review</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Discover how NexusNest's innovative solutions have transformed the way our clients experience technology. From seamless integration to exceptional support, our clients' reviews highlight the impact of our commitment to excellence</p>
                    </div>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        {data && data.map((item,index)=>{
                            return(
                                <ul className="space-y-8" key={index}>
                                <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <img src={item.img} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" width={64} height={64} />
    
                                        <div className="ps-4">
                                             <Link href="" className="text-lg h5 hover:text-violet-600 duration-500 ease-in-out font-lexend">{item.name}</Link>
                                            <p className="text-slate-400">{item.designation}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.description}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li>
    
                                {/* <li className="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <Image src={item.image1} className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt="" width={64} height={64} />
    
                                        <div className="ps-4">
                                             <Link href="" className="text-lg h5 hover:text-violet-600 duration-500 ease-in-out font-lexend">{item.name1} No</Link>
                                            <p className="text-slate-400">{item.designation1}</p>
                                        </div>
                                    </div>
    
                                    <div className="mt-6">
                                        <p className="text-slate-400">{item.description1}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-2">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                </li> */}
                            </ul>
                            )
                        })}
                    </div>
                </div>
            </section>
        
     </>
}



