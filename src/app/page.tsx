'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import svg from 'src/app/images/home.svg'
import Blob from '@/app/components/blob'

export default function Home() {
  const [showSubOptions, setShowSubOptions] = useState(false);
  return (
    <div className=" bg-gradient-to-b from-bg to-bg2 max-h-screen flex flex-col md:flex-row overflow-hidden h-[calc(100vh)]">
      <div className="m-20 mt-10 md:mt-20 mb-0 mr-0 flex flex-col font-serif text-fg z-10  min-w-[15rem]">
        <h1 className='text-4xl font-bold  w-full'>Aseem Ratha</h1>
        <div className='text-xl flex flex-col'>
          <a href='/' className='hover:pl-6 pl-3 ml-2 mt-2 transition-all border-l border-orange-900 font-bold'><button>Home</button></a>
          <Link href='/videos' className='hover:pl-6 pl-3 ml-2 transition-all border-l border-orange-900' onMouseEnter={() => setShowSubOptions(true)} onMouseLeave={() => setShowSubOptions(false)}><button>Projects</button></Link>
          <div className='overflow-hidden ml-2' onMouseEnter={() => setShowSubOptions(true)} onMouseLeave={() => setShowSubOptions(false)}>
            <div className={`flex flex-col text-lg  sub-options border-l border-orange-900  ${showSubOptions ? 'show' : ''}`}>
              <Link href='/videos' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Videos</button></Link>
              <Link href='/visuals' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Visuals</button></Link>
              <Link href='/websites' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Websites</button></Link>
              <Link href='/contact' className='hover:pl-6 pl-3  transition-all text-xl'><button>Contact</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-auto md:m-auto md:pt-7 flex flex-col items-center justify-center'>
        <Image src={svg} width={720} alt='' className=' pl-4 w-full md:h-[90vh] h-full object-contain' />
        <div className='grainy absolute inset-0 scale-75 md:scale-100 -translate-y-20 md:-translate-y-28 flex items-center justify-center blur-xl'>
          <Blob /> {/* Adjust Blob component's size and position if necessary */}
        </div>
        <div className='grain w-full h-full absolute' />
        <svg>
          <filter id="grainy">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.65"
            />
          </filter>
        </svg>
      </div>
    </div>
  )
}
