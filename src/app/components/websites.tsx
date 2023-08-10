'use client'

import Image from 'next/image'

import img1 from '../images/knox.png'
import img2 from '../images/dreary.png'
import img3 from '../images/2814.png'
import img4 from '../images/superstition.png'
import img5 from '../images/months.png'

/**
 * Renders a component that displays a video player and a row of buttons that allow the user to switch between videos.
 * @returns JSX.Element
 */
export default function Websites() {
    return (
        <div className="h-screen w-[35rem] flex flex-col overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-2">
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

