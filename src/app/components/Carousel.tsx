'use client'

import Image from 'next/image'
import React from 'react'
import UT1 from '@/assets/UTCar1.jpg'
import UT2 from '@/assets/UTcar2.webp'
import UT3 from '@/assets/UTcar3.jpeg'
import UT4 from '@/assets/UTcar4.jpeg'
import pendaftaran from '@/assets/Pendaftaran1.jpg'
import icei from '@/assets/ICE-new.png'
import uttv from '@/assets/UT-TV.png'
import pd from '@/assets/Perpustakaan-UT.png'
import utr from '@/assets/UT_Radio_Streaming.png'
import promis from '@/assets/ProMISe_UT.png'

const Carousel = () => {
    return (
        <div>
            {/* <!-- Slider --> */}
            <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full lg:min-h-[500px] min-h-[100px] bg-gray-200 rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={UT1} alt='UT1' />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200 ">
                                <Image src={UT2} alt='UT2' width={2000} height={2000} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={UT3} alt='UT3' width={2000} height={2000} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={UT4} alt='UT4' width={2000} height={2000} />
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>


            </div>
            {/* <!-- End Slider --> */}
            <div>
                <div>
                    <div className="bg-gradient-to-t from-blue-100 via-gray-50 to-white pt-10 text-center ">
                        <div className="grid grid-cols-2 md:grid-cols-6 md:max-w-[1500px] justify-center items-center md:pl-64">
                            <Image src={pendaftaran} alt="Pendaftaran" className="h-16" />
                            <Image src={icei} alt="Indonesia Cyber Education Institute" className="h-16" />
                            <Image src={uttv} alt="UT TV" className="h-16" />
                            <Image src={pd} alt="Perpustakaan Digital" className="h-16" />
                            <Image src={utr} alt="UT Radio" className="h-16" />
                            <Image src={promis} alt="ProMISe" className="h-16" />
                        </div>
                        <div className="pt-4 text-center">
                            <h1 className="text-xl font-bold text-blue-700">
                                Universitas Terbuka Denpasar,
                                <span className="text-black font-mono text-lg tracking-tighter">
                                    Making Higher Education Open To All
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Carousel