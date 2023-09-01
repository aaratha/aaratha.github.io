'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import img1 from '../images/daydream.png'
import img2 from '../images/knox.png'
import img3 from '../images/dreary.png'
import img4 from '../images/2814.png'
import img5 from '../images/superstition.png'
import img6 from '../images/months.png'

export default function Videos() {
    const [i, setI] = useState(0);

    let videos = ['https://www.youtube.com/embed/9eHqGEshB2A', 'https://www.youtube.com/embed/TBMEBSfnJbQ', 'https://www.youtube.com/embed/TybreaCetEA', 'https://www.youtube.com/embed/OcpRc_LU-e0', 'https://www.youtube.com/embed/buUa9jiD9os', 'https://www.youtube.com/embed/GSU93sFdRls']

    return (
        <div className="md:border-l-2 md:border-r-2 border-amber-900 h-full w-full flex flex-col mr-10 md:w-[55vw] md:pl-5 pr-8 md:pr-5 md:pb-12 pt-12">
            <iframe className="w-full h-full rounded-lg min-h-[42vh]" src={videos[i]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='flex flex-row items-center mt-1 md:mt-0 overflow-scroll overflow-y-hidden scrollbar-track-orange-200 scrollbar-thumb-amber-900 scrollbar-thin pb-2 md:pb-1 pt-1 md:pt-1'>
                <button onClick={() => setI(0)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img1} alt='daydream' className='rounded-lg min-w-[7rem]'></Image></button>
                <button onClick={() => setI(1)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img2} alt='knox' className='rounded-lg min-w-[7rem]'></Image></button>
                <button onClick={() => setI(2)} className='p-1 pl-0 hover:scale-95 transition-all min-w-[7rem]'><Image src={img3} alt='dreary' className='rounded-lg'></Image></button>
                <button onClick={() => setI(3)} className='p-1 pl-0 hover:scale-95 transition-all min-w-[7rem]'><Image src={img4} alt='2814' className='rounded-lg'></Image></button>
                <button onClick={() => setI(4)} className='p-1 pl-0 hover:scale-95 transition-all min-w-[7rem]'><Image src={img5} alt='superstition' className='rounded-lg'></Image></button>
                <button onClick={() => setI(5)} className='p-1 pl-0 pr-0 hover:scale-95 transition-all min-w-[7rem]'><Image src={img6} alt='months' className='rounded-lg'></Image></button>
            </div>
        </div>
    )
}

