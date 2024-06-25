'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
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
            <div className='ml-20 md:ml-30 flex flex-col text-fg mt-6 sm:mt-0'>
                <h1 className='text-3xl font-serif md:mt-72 font-bold mb-5'>Contact</h1>
                <a href='https://www.instagram.com/aa.ratha/' className='mb-5 text-lg font-serif hover:translate-x-2 transition-all'>Instagram: @aa.ratha</a>
                <a href='mailto:aseemratha@gmail.com' className='text-lg font-serif hover:translate-x-2 transition-all'>Email: aseemratha@gmail.com</a>
            </div>
          </div>
        )
            

}
