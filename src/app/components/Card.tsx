"use client"

import React from 'react'


const Card = () => {
  return (
    <div className='max-w-[72rem] mx-auto'>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
          {/* <!-- Pengumuman --> */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <div className="bg-blue-200 pt-5 rounded-t-xl">
              <h2 className="text-xl font-bold text-center text-blue-700">Pengumuman</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="py-2">
                <p>OSMB Batch 2 Semester 2024/2025 Ganjil</p>
                <span className="text-gray-500 text-sm">19 Agustus 2024</span>
              </li>
              <li className="py-2">
                <p>OSMB Dan PKBJJ Semester 2024/2025 Ganjil Batch 1</p>
                <span className="text-gray-500 text-sm">1 Agustus 2024</span>
              </li>
              <li className="py-2">
                <p>Lokasi Dan Tanggal UAS 2023/2024 Genap UT Denpasar</p>
                <span className="text-gray-500 text-sm">12 Juni 2024</span>
              </li>
              <li className="py-2">
                <p>Wisuda Periode II Wilayah I Tahun Akademik 2023/2024</p>
                <span className="text-gray-500 text-sm">4 Juni 2024</span>
              </li>
              <li className="py-2">
                <p>Wisuda UT Denpasar Periode I Tahun 2024</p>
                <span className="text-gray-500 text-sm">2 Mei 2024</span>
              </li>
              {/* <!-- Tambahkan item lainnya sesuai kebutuhan --> */}
            </ul>
          </div>
    
          {/* <!-- Berita --> */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <div className="bg-blue-200 pt-5 rounded-t-xl">
              <h2 className="text-xl font-bold text-center text-blue-700">Berita</h2>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="py-2">
                <p>UT Menuju World Class University</p>
                <span className="text-gray-500 text-sm">17 September 2024</span>
              </li>
              <li className="py-2">
                <p>PKBJJ UT Denpasar Tahun Ajaran 2024/2025</p>
                <span className="text-gray-500 text-sm">10 September 2024</span>
              </li>
              <li className="py-2">
                <p>UT Denpasar Meresmikan SALUT Ke-5 Di Seririt, SALUT Kamboja</p>
                <span className="text-gray-500 text-sm">30 Agustus 2024</span>
              </li>
              <li className="py-2">
                <p>PENGABDIAN KEPADA MASYARAKAT (PKM) NASIONAL UNIVERSITAS TERBUKA 2024 TAHUN KE-2 DI BLIMBINGSARI</p>
                <span className="text-gray-500 text-sm">13 Agustus 2024</span>
              </li>
              <li className="py-2">
                <p>Orientasi Studi Mahasiswa Baru (OSMB) 2024.2/2025 (Ganjil)</p>
                <span className="text-gray-500 text-sm">12 Agustus 2024</span>
              </li>
              {/* <!-- Tambahkan item lainnya sesuai kebutuhan --> */}
            </ul>
          </div>
    
          {/* <!-- UT Pusat --> */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <div className="bg-blue-200 pt-5 rounded-t-xl">
              <h2 className="text-xl font-bold text-center text-blue-700">UT Pusat</h2>
            </div>
            <ul className="list-disc list-inside text-left">
              <li>
                UT & Eduversal Foundation Berkolaborasi! Transformasi Pendidikan di Era Digital!
                <span className="text-black font-bold  text-sm"> 12 September 2024</span>
              </li>
              <li>
                Kreasi dan Inovasi untuk Masa Depan: UT Hadirkan Galeri PTJJ & Job Fair Spektakuler
                <span className="text-black font-bold  text-sm"> 12 September 2024</span>
              </li>
              <li>
                Universitas Terbuka Perkuat Strategi sebagai PTN-BH dengan Pelantikan Pejabat Baru
                <span className="text-black font-bold  text-sm"> 11 September 2024</span>
              </li>
              <li>
              Puncak Dies UT 2024: Inilah Para Juara DISPORSENI, Ajang Talenta dan Kolaborasi! 6 September 2024
                <span className="text-black font-bold  text-sm"> 6 September 2024</span>
              </li>
              <li>
              RTM MPJJ 2024: Langkah Strategis UT Menuju PTN-BH Berkualitas Dunia
                <span className="text-black font-bold  text-sm"> 6 September 2024</span>
              </li>
              {/* <!-- Tambahkan item lainnya sesuai kebutuhan --> */}
            </ul>
          </div>

        </div>
      </div>
      <div>
      {/* <!-- Slider --> */}
<div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' className="relative">
  <div className="hs-carousel relative overflow-hidden w-full min-h-9 bg-white rounded-lg">
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-cyan-300">
          <span className="self-center text-xl bg-cyan-300 text-black">
            UT Denpasar Meresmikan SALUT Ke-5 di Seririt, SALUT Kamboja
        </span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
          <span className="self-center text-4xl bg-cyan-300 text-black">Second slide</span>
        </div>
      </div>
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
          <span className="self-center text-4xl bg-cyan-300 text-black">Third slide</span>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- End Slider --> */}
      </div>
      
    </div>
  )
}

export default Card
