'use client'

import Image from 'next/image'

import img1 from '../images/site1.png'
import img2 from '../images/site2.png'
import img3 from '../images/site3.png'

/**
 * Renders a component that displays a video player and a row of buttons that allow the user to switch between videos.
 * @returns JSX.Element
 */
export default function Websites() {
    return (
        <div className="h-screen w-[35rem] flex flex-col overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-5">
            <div className='flex flex-col'>
                <a href='/'><Image src={img1} alt='site1' className='rounded-lg mt-5 mb-5 border-2 border-amber-900 hover:scale-95 transition-all'></Image></a>
                <a href='https://www.wec.education/'><Image src={img3} alt='site2' className='rounded-lg mb-5 border-2 border-amber-900 hover:scale-95 transition-all'></Image></a>
                <a href='https://www.cinebrief.com'><Image src={img2} alt='site3' className='rounded-lg mb-5 border-2 border-amber-900 hover:scale-95 transition-all'></Image></a>

            </div>
        </div>
    )
}

