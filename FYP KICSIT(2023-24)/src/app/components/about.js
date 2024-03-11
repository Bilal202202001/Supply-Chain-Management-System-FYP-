'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function About() {
    return (
        <>
            <section className="relative md:py-24 py-16" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <Image src="/images/about2.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}}/>
                                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7">
                                <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend"> <span className="mb-4 md:text-2xl text-xl font-medium font-lexend">NexusNest
</span></h3>
                                {/* <h3 className="mb-4 md:text-1xl text-xl font-medium font-lexend">Founding: <span className="font-extralight mb-4 md:text-1xl text-xl font-medium font-lexend">{"ABC"}</span></h3>
                                <h3 className="mb-4 md:text-1xl text-xl font-medium font-lexend">Founder: <span className="font-extralight mb-4 md:text-1xl text-xl font-medium font-lexend">{"ABC"}</span></h3>
                                <h3 className="mb-4 md:text-1xl text-xl font-medium font-lexend">Year: <span className="font-extralight mb-4 md:text-1xl text-xl font-medium font-lexend">{"ABC"}</span ></h3> */}

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">NexusNest stands as a beacon of technological marvels, dedicated to seamlessly intertwining innovation and functionality. With a relentless commitment to pushing boundaries, NexusNest is your gateway to a world where cutting-edge technology meets everyday life in extraordinary ways. Our mission is to transcend the ordinary, to harness the power of imagination, and to craft solutions that resonate with the modern world. Guided by a passion for progress, we tirelessly engineer products that not only meet but exceed expectations, inviting you to partake in a journey of exploration and discovery. NexusNest is more than a company; it's a philosophy that drives us to create a future where possibilities are not just envisioned, but realized, one breakthrough at a time. Welcome to a realm where the nexus of innovation and your needs converge, welcome to NexusNest.
                                </p>

                                {/* <div className="relative mt-8">
                                    <Link href="#services"
                                        className="py-2 px-5 font-inter  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md inline-flex items-center gap-1">Read
                                        More<Unicons.UilArrowRight width={16}/></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};