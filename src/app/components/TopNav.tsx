"use client"

import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white p-2 border-b">
      <nav className="max-w-[72rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        {/* Kiri: Informasi Kontak */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884l.345-.826a2 2 0 011.356-1.164l2.008-.502a2 2 0 012.33 1.099l.723 1.446a2 2 0 01-.47 2.447L6.49 9.59a14.997 14.997 0 006.92 6.92l.737-1.803a2 2 0 012.447-.47l1.446.723a2 2 0 011.099 2.33l-.502 2.008a2 2 0 01-1.164 1.356l-.826.345a2 2 0 01-2.129-.536c-1.177-1.177-2.73-2.887-4.557-4.557-1.83-1.83-3.566-3.38-4.557-4.557a2 2 0 01-.536-2.129z"/>
                </svg>
              </div>
              <span className="text-gray-800">0361-2108064</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-blue-100 p-2 rounded-full text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8-4H8m0 8h8m0 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m4 0v-4a2 2 0 012-2h4a2 2 0 012 2v4z" />
                </svg>
              </div>
              <span className="text-gray-800">ut-denpasar@ecampus.ut.ac.id</span>
            </div>
          </div>

          {/* Tombol Hamburger untuk layar kecil */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Kanan: Media Sosial & Pencarian */}
        <div className={`sm:flex ${menuOpen ? "block" : "hidden"} flex-col sm:flex-row items-center space-x-1 sm:space-y-0 space-y-4`}>
          <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-800">
            <FaInstagram />
          </a>
          <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-800">
            <FaTiktok />
          </a>
          <a href="#" className="bg-blue-100 p-2 rounded-full text-blue-800">
            <FaYoutube />
          </a>

          {/* Input Pencarian */}
          <div className="pt-2 sm:pl-4">
            <input type="text" placeholder="Cari..." className="bg-gray-100 p-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNav;
