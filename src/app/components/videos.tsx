'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import img1 from '../images/knox.png'
import img2 from '../images/dreary.png'
import img3 from '../images/2814.png'
import img4 from '../images/superstition.png'
import img5 from '../images/months.png'

export default function Videos() {
    const [i, setI] = useState(0);

    let videos = ["https://www.youtube.com/embed/TBMEBSfnJbQ", 'https://www.youtube.com/embed/TybreaCetEA', 'https://www.youtube.com/embed/OcpRc_LU-e0', 'https://www.youtube.com/embed/buUa9jiD9os', 'https://www.youtube.com/embed/GSU93sFdRls']

    return (
        <div className=" h-full w-full flex flex-col p-20 pl-0">
            <iframe className="w-full h-full rounded-lg " src={videos[i]} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className='flex flex-row'>
                <button onClick={() => setI(0)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img1} alt='knox' className='rounded-lg'></Image></button>
                <button onClick={() => setI(1)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img2} alt='dreary' className='rounded-lg'></Image></button>
                <button onClick={() => setI(2)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img3} alt='2814' className='rounded-lg'></Image></button>
                <button onClick={() => setI(3)} className='p-1 pl-0 hover:scale-95 transition-all'><Image src={img4} alt='superstition' className='rounded-lg'></Image></button>
                <button onClick={() => setI(4)} className='p-1 pl-0 pr-0 hover:scale-95 transition-all'><Image src={img5} alt='months' className='rounded-lg'></Image></button>
            </div>
        </div>
    )
}

