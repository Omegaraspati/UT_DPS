'use client'

import React from 'react'
import Image from 'next/image'
import rbv from '@/assets/erbe.png'
import halout from '@/assets/halout.png'
import wbs from '@/assets/wbs.png'
import kampusmerdeka from '@/assets/kampusmerdeka.png'
import lapor from '@/assets/Lapor.png'
import mooc from '@/assets/mooc.png'

const Header = () => {
  return (
    <div>
        <div>
        <div className="bg-gradient-to-t from-blue-100 via-gray-50 to-white pt-10 text-center ">
                        <div className="grid grid-cols-2 md:grid-cols-6 md:max-w-[1500px] justify-center items-center md:pl-64">
                            <Image src={halout} alt="Pendaftaran" className="h-16" />
                            <Image src={wbs} alt="Indonesia Cyber Education Institute" className="h-16" />
                            <Image src={kampusmerdeka} alt="UT TV" className="h-16" />
                            <Image src={lapor} alt="Perpustakaan Digital" className="h-16" />
                            <Image src={rbv} alt="UT Radio" className="h-16" />
                            <Image src={mooc} alt="ProMISe" className="h-16" />
                        </div>
                </div>

            </div>
    </div>
  )
}

export default Header