'use client'

import Image from 'next/image'

import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.png'
import img5 from '../images/img5.jpg'

export default function Visuals() {
    return (
        <div className="h-screen md:w-[35rem] flex flex-col md:overflow-scroll md:overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-5">
            <div className='flex flex-col'>
                <Image src={img1} alt='img1' className='rounded-lg mt-5 mb-5'></Image>
                <Image src={img3} alt='img2' className='rounded-lg mb-5'></Image>
                <Image src={img2} alt='img3' className='rounded-lg mb-5 w-full'></Image>
                <Image src={img4} alt='img4' className='rounded-lg mb-5'></Image>
                <Image src={img5} alt='img5' className='rounded-lg mb-5'></Image>
            </div>
        </div>
    )
}

