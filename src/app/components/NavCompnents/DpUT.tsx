'use client'

import React from 'react'

const DpUT = () => {
  return (
    <div>
            <div>
            <div className="m-1 hs-dropdown [--trigger:hover] relative inline-flex z-10">
                <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle uppercase inline-flex items-center hover:text-blue-800 text-sm font-medium  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    UT online
                    <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </button>

                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-1 space-y-0.5 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:text-blue-800" href="#">
                        Kalender Akademik
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        KATALOG UT
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Formulir Kemahasiswaan
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Pembayaran UT
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        My UT
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                       TUTON (Tutorial Online)
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Sistem Pembelajaran Universitas Terbuka (SILAYAR)
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Jadwal TTM/TUWEB Denpasar
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Kegiatan LPKBJJ
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Perpustakaan Digital
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Laman Tutor
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                       Suaka UT
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        Akreditasi BAN-PT
                    </a>
                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:text-blue-800" href="#">
                        IKA-UT (Ikatan Alumni)
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DpUT