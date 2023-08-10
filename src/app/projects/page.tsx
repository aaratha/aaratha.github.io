'use client'

import React, { useEffect, useState } from 'react';
import Videos from '../components/videos';
import Visuals from '../components/visuals';
import Websites from '../components/websites';

export default function Projects() {
    const [showSubOptions, setShowSubOptions] = useState(true);
    const [selectedOption, setSelectedOption] = useState('Videos');

    const handleClick = (option: string) => {
        setSelectedOption(option);
    }

    let componentToDisplay;
    if (selectedOption === 'Videos') {
        componentToDisplay = <Videos />;
    } else if (selectedOption === 'Visuals') {
        componentToDisplay = <Visuals />;
    } else if (selectedOption === 'Websites') {
        componentToDisplay = <Websites />;
    }

    return (
        <div className="bg-orange-200 min-h-screen flex flex-col md:flex-row">
            <div className="m-20 mr-auto flex flex-col font-serif text-orange-900 z-10">
                <h1 className='text-4xl font-bold '>Aseem Ratha</h1>
                <div className='text-xl flex flex-col'>
                    <a href='/' className='hover:pl-6 pl-3 ml-2 mt-2 transition-all border-l border-orange-900'><button>Home</button></a>
                    <a href='/projects' className='hover:pl-6 pl-3 ml-2 transition-all border-l border-orange-900 font-bold'><button>Projects</button></a>
                    <div className='overflow-hidden ml-2'>
                        <div className={`flex flex-col text-lg  sub-options border-l border-orange-900  ${showSubOptions ? 'show' : ''}`}>
                            <button className={`flex hover:translate-x-5  transition-all translate-x-3 ml-2 ${selectedOption === 'Videos' ? 'font-bold' : ''}`} onClick={() => handleClick('Videos')}>• Videos</button>
                            <button className={`flex hover:translate-x-5  transition-all translate-x-3 ml-2 ${selectedOption === 'Visuals' ? 'font-bold' : ''}`} onClick={() => handleClick('Visuals')}>• Visuals</button>
                            <button className={`flex hover:translate-x-5  transition-all translate-x-3 ml-2 ${selectedOption === 'Websites' ? 'font-bold' : ''}`} onClick={() => handleClick('Websites')}>• Websites</button>
                            <a href='/contact'><button className='flex hover:pl-6 pl-3  transition-all text-xl'>Contact</button></a>
                        </div>
                    </div>
                    <p className='text-black pt-10'>*Page in development</p>
                </div>            </div>
            <div className='max-h-screen m-20 ml-8 w-[60vw]'><Videos /></div>
        </div>
    )
}