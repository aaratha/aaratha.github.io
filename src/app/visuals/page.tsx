import Videos from '../components/videos';
import Visuals from '../components/visuals';
import Websites from '../components/websites';
import Link from 'next/link'
import { Averia_Serif_Libre } from 'next/font/google'


export default function Projects() {

  return (
    <div className="bg-gradient-to-b from-bg to-bg2 max-h-screen flex flex-col md:flex-row">
      <div className="m-20 mt-10 md:mt-20 mb-0 mr-auto flex flex-col font-serif text-fg z-10">
        <h1 className='text-4xl font-bold '>Aseem Ratha</h1>
        <div className='text-xl flex flex-col'>
          <a href='/' className='hover:pl-6 pl-3 ml-2 mt-2 transition-all border-l border-fg'><button>Home</button></a>
          <a href='/videos' className='hover:pl-6 pl-3 ml-2 transition-all border-l border-fg font-bold'><button>Projects</button></a>
          <div className='overflow-hidden ml-2'>
            <div className='flex flex-col text-lg border-l border-fg'>
              <Link href='/videos'><button className='flex hover:translate-x-5  transition-all translate-x-3 ml-2'>• Videos</button></Link>
              <Link href='/visuals'><button className='flex hover:translate-x-5  transition-all translate-x-3 ml-2 font-bold'>• Visuals</button></Link>
              <Link href='/websites'><button className='flex hover:translate-x-5  transition-all translate-x-3 ml-2'>• Websites</button></Link>
              <Link href='/contact'><button className='flex hover:pl-6 pl-3  transition-all text-xl'>Contact</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[58vh] md:h-[100vh] md:max-h-screen ml-8 md:w-[60vw] max-w-screen'><Visuals /></div>
    </div>
  )
}
