'use client'

import React from 'react'
import Image from 'next/image'
import footer from '@/assets/Footer.png'

const Footer = () => {
  return (
    <div className="relative">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footer}// Ganti dengan path gambar yang sesuai
          alt="Background Image"
          layout=""
          objectFit="cover"
          quality={100}
          className="pointer-events-none"
        />
      </div>

      {/* Footer Content */}
      <footer className="relative z-10 bg-opacity-90 text-white pt-80">
        <div className="container mx-auto px-4 flex">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 px-px">
            <div>
              <h3 className="text-lg font-bold">Universitas Terbuka Denpasar</h3>
              <p>Jl. Raya Sesetan no. 121, Sesetan, Denpasar Selatan, 80223</p>
              <p>Email: <a href="mailto:ut-denpasar@ecampus.ut.ac.id" className="text-yellow-300">ut-denpasar@ecampus.ut.ac.id</a></p>
              <p>Phone: <a href="tel:+623612108064" className="text-yellow-300">(0361) 2108064</a></p>
              <p>Fax: <a href="tel:+62361710606" className="text-yellow-300">(0361) 710606</a></p>
              <p>WA: <a href="https://wa.me/08974750077" className="text-yellow-300">089 747 500 77</a></p>
            </div>

            <div className="md:text-left">
              <h3 className="text-lg font-bold">Jam Pelayanan UT Denpasar</h3>
              <ul>
                <li>Senin - Kamis: 08:00 - 16:30 WITA</li>
                <li>Jumat: 08:00 - 17:00 WITA</li>
                <li>Sabtu - Minggu: Tentatif</li>
              </ul>
              <div className=''>
                <p>&copy; Universitas Terbuka Denpasar 2024 | Making Higher Education Open To All</p>
                </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {/* <div>
                <h3 className="font-bold">Google Maps</h3>
                <iframe className="w-full h-48 rounded-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.222231685719!2d115.1907276!3d-8.696931599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241e2b1a5cbb5%3A0x3dfbf6b60f9f59b!2sUniversitas%20Terbuka%20Denpasar!5e0!3m2!1sid!2sid!4v1694351367778!5m2!1sid!2sid"
                 loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div> */}

              {/* <div className="md:text-right">
                <h3 className="font-bold">Social Media</h3>
                <div className="flex justify-center md:justify-end space-x-4">
                  <a href="https://instagram.com" target="_blank" className="text-yellow-300">Instagram</a>
                  <a href="https://facebook.com" target="_blank" className="text-yellow-300">Facebook</a>
                  <a href="https://wa.me/08974750077" target="_blank" className="text-yellow-300">WhatsApp</a>
                  <a href="https://tiktok.com" target="_blank" className="text-yellow-300">TikTok</a>
                  <a href="https://youtube.com" target="_blank" className="text-yellow-300">YouTube</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
