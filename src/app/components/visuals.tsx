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
    <div className="list-shadow md:border-l-2 md:pl-10 md:border-r-2 border-fg h-screen md:w-[55vw] flex flex-col md:overflow-scroll md:overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-8 md:pr-10 pt-8 md:pt-0">
      <div className='flex flex-col'>
      {[...images].reverse().map((image, index) => (
        <Image key={index} src={image.default} alt={`img${index + 1}`} className='rounded-lg mt-5 w-full item-shadow' />
      ))}
      </div>
    </div>
  )
}

