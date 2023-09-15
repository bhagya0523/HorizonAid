import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative min-h-screen contrast-140 '>
         <Image className=" absolute -z-10" 
         src="/hero.jpg" 
         fill
         alt="hero.bg"
         
        />
        
         <Navbar />

         <div className=' font-boldcontainer h-[calc(100vh-120px)] grid items-center'>
         
         <div className='space-y-35  w-fit p-20'>
           
            <h2 className='text-4xl sm:text-6xl font-bold '>Bridging Gaps
            <br />
             <span className='text-indigo-600'>Building Dreams</span></h2>
            <p className='text-gray-700 text-[14px] sm:text-[16px]'>Beyond your imagination</p>
          
          <br />

          <Link href={"/discover"}>
          <button className='hover:bg-indigo-500 bg-indigo-600 text-white px-6 py-3 rounded-3xl text-[14px] sm:text-[16px] shadow-lg shadow-indigo-500/50'>View Projects</button>
            </Link>
         </div>

         </div>

        </div>
  )
}

export default Hero

