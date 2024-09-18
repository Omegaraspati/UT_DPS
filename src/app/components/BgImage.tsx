'use client'
import Image from 'next/image'
import React from 'react'
import background from '@/assets/BgUT.png'
import { FaHandPointRight, FaWhatsapp } from 'react-icons/fa'


const BgImage = () => {
    return (
        <div className="relative h-screen">

      
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Image
                    src={background} // Path ke gambar yang Anda ingin gunakan
                    alt="Background Image"
                    layout="fill" // Mengisi seluruh kontainer
                    objectFit="cover" // Membuat gambar menutupi area dengan proporsi yang benar
                    quality={100} // Kualitas gambar
                />
            </div>

  
            <div className="p-28 h-full max-w-[1000px]">
                <div className="text-left text-white">
                    <h1 className="text-4xl font-bold">Ingin Kuliah di Kampus Negeri
                        yang fleksibel dan biaya terjangkau ?</h1>
                    <h1 className='text-4xl font-bold'>di Universitas Terbuka saja !!</h1>
                    <a href="#" className="inline-block px-6 py-3 rounded-full text-black text-lg font-bold bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:text-white hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out">
                        <span><FaHandPointRight /></span>Info Jurusan
                    </a>
                  
                    <h1 className="text-4xl font-bold pt-28">Masih Bingung ?</h1>
                    <h1 className='text-4xl font-bold '>tanya-tanya dulu juga boleh</h1>
                    <h1 className='text-4xl font-bold'>yuk hubungi kami !!</h1>
                    <a href="#" className="inline-block px-6 py-3 rounded-full text-black text-lg font-bold bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg hover:text-white hover:shadow-xl transform hover:scale-110 transition duration-300 ease-in-out">
                        <span><FaWhatsapp /></span>Hubungi Kami
                    </a>


                </div>
            </div>

            
            

        </div>
    )
}

export default BgImage
