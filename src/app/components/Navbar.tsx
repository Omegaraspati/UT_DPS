"use client"

import Image from 'next/image'
import React from 'react'
import LogoUT from '@/assets/logo_UT.png'
import DpAkademik from './NavCompnents/DpAkademik'
import DpUT from './NavCompnents/DpUT'
import { FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <header className="sticky top-0 p-2 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-gradient-to-b from-blue-100 via-blue-50 to-white z-50">
                <nav className="max-w-[72rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between z-20">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
                            <Image src={LogoUT} alt="Logo" width={250} height={700} />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>
                    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                            <a className="font-medium text-blue-800 focus:outline-none uppercase text-sm" href="#" aria-current="page">beranda</a>
                            <a className="font-medium text-black hover:text-blue-800 focus:outline-none uppercase text-sm " href="#">profile</a>
                            <DpAkademik />
                            <DpUT />
                            <a className="font-medium text-black hover:text-blue-800 focus:outline-none uppercase text-sm " href="#">pengumuman</a>
                            <a className="font-medium text-black hover:text-blue-800 focus:outline-none uppercase text-sm " href="#">berita</a>
                            <div className="border-l border-gray-400 h-6"></div>
                            <div>
                                <a href="#" className="bg-gradient-to-r from-green-200 via-blue-300 to-blue-500 text-black font-bold px-4 py-2 rounded-full flex items-center space-x-2 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
                                    <FaWhatsapp />
                                    <span>Hubungi Kami</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
