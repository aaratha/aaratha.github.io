'use client'

import React, { useState } from 'react';

export default function Contact() {
    const [showSubOptions, setShowSubOptions] = useState(false);

    return (
        <div className="bg-gradient-to-b from-bg to-bg2 max-h-screen flex flex-col md:flex-row text-fg overflow-hidden h-[calc(100vh)]">
            <div className="m-20 mt-10 md:mt-20 mr-10 flex flex-col font-serif  z-10">
                <h1 className='text-4xl font-bold '>Aseem Ratha</h1>
                <div className='text-xl flex flex-col'>
                    <a href='/' className='hover:pl-6 pl-3 ml-2 mt-2 transition-all border-l border-fg'><button>Home</button></a>
                    <a href='/videos' className='hover:pl-6 pl-3 ml-2 transition-all border-l border-fg' onMouseEnter={() => setShowSubOptions(true)} onMouseLeave={() => setShowSubOptions(false)}><button>Projects</button></a>
                    <div className='overflow-hidden ml-2'>
                        <div className={`flex flex-col text-lg  sub-options border-l border-fg  ${showSubOptions ? 'show' : ''}`}>
                            <a href='/videos' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Videos</button></a>
                            <a href='/visuals' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Visuals</button></a>
                            <a href='/websites' className='hover:translate-x-5  transition-all translate-x-3 ml-2'><button>• Websites</button></a>
                            <a href='/contact' className='hover:pl-6 pl-3  transition-all text-xl font-bold'><button>Contact</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-20 md:ml-40 flex flex-col'>
                <h1 className='text-3xl font-serif md:mt-72 font-bold mb-5'>Contact</h1>
                <a href='https://www.instagram.com/aa.ratha/' className='mb-5 text-lg font-serif hover:translate-x-2 transition-all'>Instagram: @aa.ratha</a>
                <a href='mailto:aseemratha@gmail.com' className='text-lg font-serif hover:translate-x-2 transition-all'>Email: aseemratha@gmail.com</a>
            </div>
        </div>
    )
}
