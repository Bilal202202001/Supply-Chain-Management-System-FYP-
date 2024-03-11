'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Link as Link1 } from 'react-scroll';
import * as Unicons from '@iconscout/react-unicons';

export default function NavbarSmallLight() {
    const [isOpen, setMenu] = useState(true);
    const [navbarTop, setNavbarTop] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", windowScroll);
        }
        window.scrollTo(0, 0)
    }, []);

    function windowScroll() {
        setNavbarTop(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
    }
    return (
        <>
            <nav className={`${navbarTop === true ? 'is-sticky' : ''} navbar font-lexend `} id="navbar">
                <div className="container flex flex-wrap items-center justify-end">
                    <a className="navbar-brand md:me-8" href="/">
                        <span className="inline-block flex items-center justify-center">
                            <img src='/images/logoC.png' className='h-10 w-10' alt="logo" />

                            {/* //Home dark Mode hover + light mode */}
                            <h2 className=' text-lg font-lexend text-black ml-3 dark:text-gray-400 hover:text-violet-600 l-dark'>NexusNest</h2>
                            <h2 className=' text-lg font-lexend text-gray-400 ml-3 hover:text-white l-light'>NexusNest</h2>

                            {/* <Image src="/images/logo-dark.png" className="l-dark" alt="" width={113} height={28}/>
                            <Image src="/images/logo-light.png" className="l-light" alt="" width={113} height={28}/> */}
                        </span>
                        {/* <Image src="/images/logo-light.png" className="hidden dark:inline-block" alt="" width={113} height={28}/> */}
                    </a>

                    <div className="nav-icons flex items-center lg_992:order-2 ms-auto lg:ms-4">

                        <ul className="list-none menu-social mb-0">
                            <li className="inline">
                                <Link href="/login"
                                    className="h-9 w-9 inline-flex items-center text-center justify-center text-base font-normal tracking-wide border align-middle transition duration-500 ease-in-out rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><Unicons.UilUser width={16} /></Link>
                            </li>
                        </ul>

                        <button data-collapse="menu-collapse" type="button" onClick={toggleMenu}
                            className="collapse-btn inline-flex items-center ms-3 text-slate-950 dark:text-white lg_992:hidden"
                            aria-controls="menu-collapse" aria-expanded="false">
                            <span className="sr-only">Navigation Menu</span>
                            <i className="mdi mdi-menu text-[24px]"></i>
                        </button>
                    </div>
                    <div className={`${isOpen === true ? 'navigation lg_992:order-1 lg_992:flex hidden ms-auto' : 'navigation lg_992:order-1 lg_992:flex block ms-auto'}`} id="menu-collapse">
                        <ul className="navbar-nav nav-light" id="navbar-navlist">
                            <li className={`nav-item`}>
                                <Link href="/" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Home</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href="/services" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Services</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href="/pricing" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Pricing</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href="/services" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Review</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href="/blog" spy={true} smooth={true} duration={500} className="nav-link">Blog</Link>
                            </li>
                            <li className={`nav-item`}>
                                <Link href="/contactus" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
