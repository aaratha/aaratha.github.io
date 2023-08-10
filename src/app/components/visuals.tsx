'use client'

import Image from 'next/image'

const images = [
    require('../images/img1.png'),
    require('../images/img2.png'),
    require('../images/img3.jpg'),
    require('../images/img4.png'),
    require('../images/img5.jpg'),
    require('../images/img6.jpeg'),
    require('../images/img7.jpeg'),
    require('../images/img8.jpeg'),
    require('../images/img9.jpeg'),
    require('../images/img10.jpeg'),
    require('../images/img11.jpg'),
    require('../images/img12.jpg'),
    require('../images/img13.jpeg'),
    require('../images/img14.jpeg'),
]

export default function Visuals() {
    return (
        <div className="h-screen md:w-[50vw] flex flex-col md:overflow-scroll md:overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-5">
            <div className='flex flex-col'>
            {images.map((image, index) => (
            <Image key={index} src={image.default} alt={`img${index + 1}`} className='rounded-lg mt-5 mb-5 w-full' />
            ))}
            </div>
        </div>
    )
}

