'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const NavbarSmallLight = dynamic(() => import('./components/navbar-small-light'));
const Switcher = dynamic(() => import('./components/Switcher'));
const Footer = dynamic(() => import('./components/footer'));
const About = dynamic(() => import('./components/about'));
const OurServices = dynamic(() => import('./components/our-services'));
const ComfortablePricing = dynamic(() => import('./components/comfortable-pricing'));
// const ClientSreview = dynamic (()=>import('./components/clientsreview'));
// const BlogsNews = dynamic(()=>import('./components/blogs-news'));
const GetInTouch = dynamic(() => import('./components/get-in-touch'));
const ClientsReviewFetch = dynamic(() => import('./components/clientsReviewFetch'));


import * as Unicons from '@iconscout/react-unicons';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";

export default function Index() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <NavbarSmallLight />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yba7hPeTSjk" onClose={() => setOpen(false)} />
            <section className="py-36 lg:py-56 w-full table relative bg-[url('/images/bg/bg-8.jpg')] bg-cover bg-center bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-gradient-to-t to-slate-950/50 via-slate-950/75 from-slate-950"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-4xl mb-5 mt-10 text-white font-lexend">
                        Empower Your Tech Journey</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-inter">Elevate your tech journey with NexusNest's empowering solutions, enhancing lifestyles through innovation</p>
                        <div className="mt-8">
                            <Link href="#" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-inter inline-flex items-center gap-1"><Unicons.UilEnvelope width={16} /> Contact Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <OurServices title="Our Services" desc="Unlock a world of exceptional service with NexusNest. From expert consultations to prompt support, we're dedicated to ensuring your tech experience is nothing short of outstanding." />
            <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/bg-5.jpg" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{ width: "100%", height: "auto" }} />
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                    <div className="lg:col-start-2 lg:col-span-10">
                                        <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px]">
                                            <div>
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white/50 font-lexend">Customers needs</h6>
                                                    <h3 className="md:text-2xl text-xl font-medium text-white mt-2 font-lexend">Spaces for every size <br /> and type of need.</h3>
                                                </div>
                                            </div>

                                            <div className="section-title text-md-start">
                                                <p className="text-white/50 max-w-xl mx-auto mb-2">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                                <Link href="" className="text-white inline-flex items-center gap-1">Read More <Unicons.UilArrowRight width={16} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-violet-600"></div>
            </section>
            <ComfortablePricing title="Our Comfortable Pricing" desc="Experience superior tech without the hefty price tags at NexusNest. Elevate your lifestyle with products that combine quality and affordability seamlessly" />
            <ClientsReviewFetch Limit="3" className="lg:py-24 py-16" />
            {/* <BlogsNews title="Blogs or News" desc="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."/> */}
            <GetInTouch />
            <Footer />
            <Switcher />
        </>
    )
}
