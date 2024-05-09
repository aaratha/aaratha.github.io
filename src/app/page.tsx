'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import svg from 'src/app/images/home.svg'

export default function Home() {
  const [showSubOptions, setShowSubOptions] = useState(false);

  return (
    <div className="bg-bg max-h-screen flex flex-col md:flex-row overflow-hidden h-[calc(100vh)]">
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
      <div className=' md:m-auto flex '>
        <Image src={svg} width={720} alt='' className='h-[55vh] md:h-[90vh] md:mt-10 fill-fg md:mb-10'></Image>
      </div>
    </div>
  )
}
