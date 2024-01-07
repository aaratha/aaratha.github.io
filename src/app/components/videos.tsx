'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Videos() {
  const [i, setI] = useState(0);

  let videos = ['https://www.youtube.com/embed/9eHqGEshB2A', 'https://www.youtube.com/embed/TBMEBSfnJbQ', 'https://www.youtube.com/embed/TybreaCetEA', 'https://www.youtube.com/embed/OcpRc_LU-e0', 'https://www.youtube.com/embed/buUa9jiD9os', 'https://www.youtube.com/embed/GSU93sFdRls']

  return (
    <div className="md:border-l-2 md:pl-5 md:border-r-2 border-amber-900 h-screen md:w-[55vw] flex flex-col md:overflow-scroll md:overflow-x-hidden scrollbar-thin scrollbar-track-orange-200 scrollbar-thumb-amber-900 pr-8 md:pr-3 pt-8 md:pt-0">
      {videos.map((video, index) => (
        <iframe key={index} src={video} alt={`video${index + 1}`} className='rounded-lg mt-5 mb-5 w-full h-full min-h-[42vh]' />
      ))}
    </div>
  )
}

