'use client'

import Image from 'next/image'

import img1 from '../images/site1.png'
import img2 from '../images/site2.png'
import img3 from '../images/site3.png'
import img4 from '../images/vic-records.png'

export default function Websites() {
    return (
        <div className="list-shadow md:border-l-2 md:pl-10 md:border-r-2 border-fg h-screen md:w-[55vw] flex flex-col md:overflow-scroll md:overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-8 md:pr-10 pt-8 md:pt-0 pb-4">
            <div className='flex flex-col'>
                <a href='https://vicrecords.netlify.app/'><Image src={img4} alt='vic-records' className='item-shadow rounded-lg mt-5 mb-5 border-2 border-amber-900 hover:scale-95 transition-all'></Image></a>
                <a href='/'><Image src={img1} alt='site1' className='item-shadow rounded-lg mt-5 mb-5 border-2 border-amber-900 hover:scale-95 transition-all'></Image></a>
                <a href='https://www.wec.education/'><Image src={img3} alt='site2' className='item-shadow rounded-lg mb-5 hover:scale-95 transition-all'></Image></a>
                <a href='https://www.cinebrief.com'><Image src={img2} alt='site3' className='item-shadow rounded-lg mb-5 hover:scale-95 transition-all'></Image></a>
            </div>
        </div>
    )
}

