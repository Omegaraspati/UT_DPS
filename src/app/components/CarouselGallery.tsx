'use client'

import React from 'react'
import Image from 'next/image'
import gal1 from '@/assets/gal1.jpg'
import gal2 from '@/assets/gal2.jpeg'
import gal3 from '@/assets/gal3.jpg'
import gal4 from '@/assets/gal4.jpeg'
import gal5 from '@/assets/gal5.jpeg'
import gal6 from '@/assets/gal6.jpeg'
import gal7 from '@/assets/gal7.jpg'
import gal8 from '@/assets/gal8.jpg'
import gal9 from '@/assets/gal9.jpg'
import gal10 from '@/assets/gal10.jpeg'
import gal11 from '@/assets/gal11.jpeg'
// import Marquee from "react-fast-marquee";

const CarouselGallery = () => {
    return (
        <div className='px-80 pt-20'>
            <div className="max-w-4xl mx-auto my-8 ">
                <h1 className="text-4xl font-bold text-center text-blue-800">
                    Gallery <span className="text-yellow-500">Mahasiswa</span>
                </h1>
            </div>
            {/* <!-- Slider --> */}
            <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative  w-[1000px]">
                <div className="hs-carousel relative overflow-hidden  min-h-[500px] bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal1} alt='UT1' />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal2} alt='UT1' width={700} height={600} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal3} alt='UT1' width={500} height={100} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal4} alt='UT1' width={700} height={600} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal5} alt='UT1' />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal6} alt='UT1' width={700} height={600} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal7} alt='UT1' width={500} height={100} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal8} alt='UT1' width={500} height={100} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal9} alt='UT1' width={500} height={100} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal10} alt='UT1' width={500} height={100} />
                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-gray-200">
                                <Image src={gal11} alt='UT1' width={700} height={600} />
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


                {/* <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                <Marquee>
                <div className="flex justify-center h-full bg-gray-200">
                    <Image src={gal10} alt='UT1' width={100} height={100} />
                    <Image src={gal9} alt='UT1' width={100} height={100} />
                    <Image src={gal8} alt='UT1' width={100} height={100} />
                    <Image src={gal7} alt='UT1' width={100} height={100} />
                    <Image src={gal6} alt='UT1' width={100} height={100} />
                    <Image src={gal5} alt='UT1' width={100} height={100} />
                    <Image src={gal4} alt='UT1' width={100} height={100} />
                    <Image src={gal3} alt='UT1' width={100} height={100} />
                    <Image src={gal2} alt='UT1' width={100} height={100} />
                    <Image src={gal1} alt='UT1' width={100} height={100} />
                 </div>
                </Marquee>
                </div> */}
            </div>
            {/* <!-- End Slider --> */}
        </div>
    )
}

export default CarouselGallery