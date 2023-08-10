'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import svg from 'src/app/images/home.svg'

export default function Home() {
  const [showSubOptions, setShowSubOptions] = useState(false);

  return (
      <div className="bg-orange-200 min-h-screen flex flex-col md:flex-row">
          <div className="m-20 mr-10 flex flex-col font-serif text-orange-900 z-10">
              <h1 className='text-4xl font-bold '>Aseem Ratha</h1>
              <div className='text-xl flex flex-col'>
                  <a href='/' className='hover:pl-6 pl-3 ml-2 mt-2 transition-all border-l border-orange-900 font-bold'><button>Home</button></a>
                  <a href='/projects' className='hover:pl-6 pl-3 ml-2 transition-all border-l border-orange-900' onMouseEnter={() => setShowSubOptions(true)} onMouseLeave={() => setShowSubOptions(false)}><button>Projects</button></a>
                  <div className='overflow-hidden ml-2'>
                      <div className={`flex flex-col text-lg  sub-options border-l border-orange-900  ${showSubOptions ? 'show' : ''}`}>
                          <a href='/videos' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Videos</button></a>
                          <a href='/visuals' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Visuals</button></a>
                          <a href='/websites' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Websites</button></a>
                          <a href='/contact' className='hover:pl-6 pl-3  transition-all text-xl'><button>Contact</button></a>
                      </div>
                  </div>
              </div>
          </div>
          <div className='m-auto'>
            <Image src={svg} width={600} alt='m-auto'></Image>
          </div>
      </div>
  )
}
